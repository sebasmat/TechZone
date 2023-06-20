import axios from "axios"
import { useEffect, useState } from "react"

const ReviewsComponent = ({ idProduct }: { idProduct: number }) => {

    const [reviewsFromDb, setReviewFromDb] = useState<reviewInterface[] | any>([])


    const findReview = async () => {
        const review = await axios.get(`http://localhost:3001/review/products/${idProduct}`)
            .then((data) => setReviewFromDb(data.data))
    }

    

    useEffect(() => {
        findReview()
    }, [])

    return (<div>
        {typeof(reviewsFromDb[0]) == "object" ? 
            reviewsFromDb.map((review : reviewInterface) => {
                let star = 0
                while (review.score < 0){
                    star = star +1
                    return(
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10 h-10 stroke-yellow-300 hover:fill-yellow-300">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                            </svg>
                    )
                }
                return (
                    <p>{review.review}</p>
                )  
            }):""
        }
    </div >)
}

export default ReviewsComponent;
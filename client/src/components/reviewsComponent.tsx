import axios from "axios"
import { useEffect, useState } from "react"
import StarScore from "./star-score"

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
        {typeof (reviewsFromDb[0]) == "object" ?
            reviewsFromDb.map((review: reviewInterface) => {
                return (<div>
                    <p>{review.review}</p>
                    <StarScore score={review.score}/>
                </div>
                )
            }) : ""
        }
    </div >)
}

export default ReviewsComponent;
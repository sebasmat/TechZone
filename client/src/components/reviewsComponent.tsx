import axios from "axios"
import { useEffect, useState } from "react"
import StarScore from "./star-score"
import { useRouter } from "next/router"

const ReviewsComponent = ({ reviewsFromDb }: { reviewsFromDb: reviewInterface[] }) => {

    console.log(reviewsFromDb)

    return (<div className="bg-violet-200 rounded-xl w-[500px]">
        {typeof (reviewsFromDb[0]) == "object" ?
            reviewsFromDb.map((review: reviewInterface) => {
                return (<div>
                    <div className="flex items-center rounded-xl bg-violet-300 ">
                        <img className="w-[85px] h-[85px] rounded-full m-4 " src={review.User.profileIMG} />
                        <div className="ml-5">
                            <p className="text-xl">{review.User.name}</p>
                            <StarScore score={review.score} />
                        </div>
                    </div>
                    <div className="m-5" >
                        <p>{review.review}</p>
                    </div>
                </div>
                )
            }) : ""
        }
    </div >)
}

export default ReviewsComponent;
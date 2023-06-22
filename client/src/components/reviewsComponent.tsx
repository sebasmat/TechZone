import axios from "axios"
import { useEffect, useState } from "react"
import StarScore from "./star-score"
import { useRouter } from "next/router"

const ReviewsComponent = ( {reviewsFromDb} : {reviewsFromDb: reviewInterface[]} ) => {

    console.log(reviewsFromDb)

    return (<div>
        {typeof (reviewsFromDb[0]) == "object" ?
            reviewsFromDb.map((review: reviewInterface) => {
                return (<div>
                    <div className="flex">
                    <img className="w-10 h-10" src={review.User.profileIMG} />
                    <p>{review.User.name}</p>
                    </div>
                    <p>{review.review}</p>
                    <StarScore score={review.score}/>
                </div>
                )
            }) : ""
        }
    </div >)
}

export default ReviewsComponent;
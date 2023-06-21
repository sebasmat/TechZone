import axios from "axios";
import { useEffect, useState } from "react";
import StarScore from "./star-score";
import reviewInterface from "@/interfaces/reviewInterface";

const ReviewsComponent = ({ idProduct }: { idProduct: number }) => {
  const [reviewsFromDb, setReviewFromDb] = useState<reviewInterface[] | any>(
    []
  );

  const findReview = async () => {
    try {
      const review = await axios
        .get(
          `https://tech-zone-api-n786.onrender.com/review/products/${idProduct}`
        )
        .then((data) => setReviewFromDb(data.data));
    } catch (error) {
      setReviewFromDb([]);
    }
  };

  useEffect(() => {
    findReview();
  }, []);

  return (
    <div>
      {typeof reviewsFromDb[0] == "object"
        ? reviewsFromDb.map((review: reviewInterface) => {
            return (
              <div key={review.id}>
                <div className="flex">
                  <img className="w-10 h-10" src={review.User?.profileIMG} />
                  <p>{review.User?.name}</p>
                </div>
                <p>{review.review}</p>
                <StarScore score={review.score} />
              </div>
            );
          })
        : ""}
    </div>
  );
};

export default ReviewsComponent;

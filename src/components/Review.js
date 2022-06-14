import { useEffect, useState } from "react";
import { fetchReviews } from "./Api";
import Loading from "./Loading";

const Review = () => {
  const [loading, setLoading] = useState(true);
  const [review, setReview] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetchReviews(1).then((res) => {
      setReview(res.data.reviews);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <Loading />;
  }

    return (
        <p>{review}</p>
    )
};

export default Review;

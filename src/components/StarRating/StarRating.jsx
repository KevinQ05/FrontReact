import "./StarRating.scss";
import { AiTwotoneStar } from "react-icons/ai";

function StarRating(props) {
  return (
    <div className="container">
      <span style={{ margin: "0 0 0 0.5rem" }}>({props.count})</span>
      <div className="star-container">
        <AiTwotoneStar className="star" />
        <AiTwotoneStar className="star" />
        <AiTwotoneStar className="star" />
        <AiTwotoneStar className="star" />
        <AiTwotoneStar className="star" />
      </div>
    </div>
  );
}

export default StarRating;

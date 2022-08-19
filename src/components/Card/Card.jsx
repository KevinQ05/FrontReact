import "./Card.scss";
import Text from "../Text/Text";
import StarRating from "../StarRating/StarRating";

function Card(props) {
  const { image, price, comment, count } = props;

  return (
    <div className="card">
      <div className="img-container">
        <img src={image} alt="" />
      </div>

      <div className="title">
        <Text>{props.children}</Text>
      </div>

      <StarRating count={count || "0"} />

      <div className="price">
        <Text className="text text-bold">{`USD $${price}`}</Text>
      </div>

      <div className="comment">
        <Text className="text text-light">{comment}</Text>
      </div>
    </div>
  );
}

export default Card;

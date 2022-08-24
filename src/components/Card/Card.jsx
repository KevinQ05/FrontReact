import "./Card.scss";
import Text from "../Text/Text";
import StarRating from "../StarRating/StarRating";
import { useState } from "react";
import LikesButton from "../LikesButton/LikesButton";
import { ReactionPicker, icons } from "../ReactionPicker/ReactionPicker";
import ReactionIcon from "../ReactionIcon/ReactionIcon";
import { BiLike } from "react-icons/bi";

function Card(props) {
  const { image, price, comment, count } = props;
  const [reaction, setReaction] = useState({
    icon: <BiLike className="likes-icon" />,
    label: "Me gusta",
  });
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
      <div className="likes-container">
        <LikesButton
          onClick={() =>
            setReaction({
              icon: <BiLike className="likes-icon" />,
              label: "Me gusta",
            })
          }
        >
          {reaction.icon}
          {reaction.label}
        </LikesButton>
        <ReactionPicker
          onClick={(icon, label, color) =>
            setReaction({
              icon: (
                <img
                  src={icon}
                  style={{ width: "20px", marginRight: "0.4rem" }}
                />
              ),
              label: <div style={{ color: color }}>{label}</div>,
            })
          }
        />
      </div>
    </div>
  );
}

export default Card;

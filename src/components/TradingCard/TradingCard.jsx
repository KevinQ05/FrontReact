import "./TradingCard.scss";
import Text from "../Text/Text";
import getDescription from "../../utils/getDescription";
import { useState, useEffect } from "react";
import LikesButton from "../LikesButton/LikesButton";
import { ReactionPicker } from "../ReactionPicker/ReactionPicker";
import { BiLike } from "react-icons/bi";
import {
  AiTwotoneCheckCircle,
  AiTwotoneQuestionCircle,
  AiTwotoneDownCircle,
} from "react-icons/ai";

const statusIcons = {
  Alive: <AiTwotoneCheckCircle className="status-circle status-alive" />,
  Dead: <AiTwotoneDownCircle className="status-circle status-dead" />,
  unknown: <AiTwotoneQuestionCircle className="status-circle status-unknown" />,
};

const speciesColoredText = {
  Human: <span className="species-human">Human</span>,
  Alien: <span className="species-alien">Alien</span>,
};

const getStatusIcon = (status) => statusIcons[status];

const getSpeciesText = (species) => speciesColoredText[species];

function TradingCard(props) {
  const { image, character } = props;
  const { status, species } = character;

  const [reaction, setReaction] = useState({
    icon: <BiLike className="likes-icon" />,
    label: "Me gusta",
  });

  const [description, setDescription] = useState("N/A");

  useEffect(() => {
    setDescription(getDescription(character));
  }, []);

  return (
    <div className="trading-card">
      <div className="trading-name">
        <Text>{props.children}</Text>
      </div>

      <div className="trading-img-container">
        <img src={image} alt="" className="trading-img" />
      </div>

      <div className="trading-info">
        <div className="trading-status">
          {getStatusIcon(status)}
          {`Status: ${status}`}
        </div>
        <div className="trading-species">
          {getSpeciesText(species) ?? species}
        </div>
      </div>

      <div className="trading-content">{description}</div>

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
                  alt=""
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

export default TradingCard;

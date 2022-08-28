import ReactionIcon from "../ReactionIcon/ReactionIcon";
import "./ReactionPicker.scss";
import haha from "../../assets/svg/haha.svg";
import angry from "../../assets/svg/angry.svg";
import care from "../../assets/svg/care.svg";
import wow from "../../assets/svg/wow.svg";
import like from "../../assets/svg/like.svg";
import love from "../../assets/svg/love.svg";
import sad from "../../assets/svg/sad.svg";

export const icons = [
  {
    icon: like,
    label: "Me gusta",
    color: "#4a90df",
  },
  {
    icon: love,
    label: "Me encanta",
    color: "#ff0077",
  },
  {
    icon: care,
    label: "Me importa",
    color: "#f1b80f",
  },
  {
    icon: haha,
    label: "Me divierte",
    color: "#f1b80f",
  },
  {
    icon: wow,
    label: "Me asombra",
    color: "#f1b80f",
  },
  {
    icon: sad,
    label: "Me entristece",
    color: "#f1b80f",
  },
  {
    icon: angry,
    label: "Me enoja",
    color: "#f1b80f",
  },
];

export function ReactionPicker(props) {
  let handleClick = (icon, label, color) => {
    props.onClick(icon, `${label}`, color);
  };
  const iconList = icons.map((icon) => (
    <ReactionIcon
      icon={icon.icon}
      label={icon.label}
      key={icon.label}
      onClick={() => handleClick(icon.icon, icon.label, icon.color)}
    />
  ));

  return <div className="reaction-container">{iconList}</div>;
}

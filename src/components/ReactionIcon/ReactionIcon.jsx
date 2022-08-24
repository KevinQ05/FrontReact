import "./ReactionIcon.scss";

function ReactionIcon(props) {
  return (
    <div className="icon">
      <img
        src={props.icon}
        className="icon-img"
        alt=""
        onClick={props.onClick}
      />
      <div className="icon-label"> {props.label} </div>
    </div>
  );
}

export default ReactionIcon;

import "./LikesButton.scss";

function LikesButton(props) {
  return (
    <div className="likes-button-container">
      <div className="likes-button" onClick={props.onClick}>
        {props.children}
      </div>
    </div>
  );
}

export default LikesButton;

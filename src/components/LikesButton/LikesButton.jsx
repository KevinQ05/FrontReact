import "./LikesButton.scss";

function LikesButton(props) {
  return (
    <div className="likes-button-container">
      <div className="likes-button noselect" onClick={props.onClick}>
        {props.children}
      </div>
    </div>
  );
}

export default LikesButton;

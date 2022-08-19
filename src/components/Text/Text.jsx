import "./Text.scss";

function Text(props) {
  const { className, style } = props;

  return (
    <p className={className || "text"} style={style}>
      {props.children}
    </p>
  );
}

export default Text;

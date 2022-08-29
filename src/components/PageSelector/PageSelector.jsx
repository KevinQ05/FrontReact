import "./PageSelector.scss";
import { RiArrowDropLeftLine, RiArrowDropRightLine } from "react-icons/ri";

export default function PageSelector(props) {
  return (
    <div className="page-selector">
      <div
        className={
          "arrow-container arrow-container-left " +
          (props.visibleLeft ? "" : "hidden")
        }
        onClick={props.leftClick}
      >
        <RiArrowDropLeftLine size={50} />
      </div>
      <p className="page-text">
        Page: <span className="page-number">{props.current}</span>
      </p>
      <div
        className={
          "arrow-container arrow-container-right " +
          (props.visibleRight ? "" : "hidden")
        }
        onClick={props.rightClick}
      >
        <RiArrowDropRightLine size={50} />
      </div>
    </div>
  );
}

import { useState } from "react";

export default function TextExpander({
  collapsedNumWords = 10,
  expandButtonText = "Show more",
  collapseButtonText = "Show less",
  buttonColor = "blue",
  expanded = false,
  className,
  children,
}) {
  const btnStyle = {
    color: buttonColor,
    padding: 0,
    border: "none",
    background: "none",
    cursor: "pointer",
  };

  const [expandState, setExpandState] = useState(expanded);

  return (
    <div>
      {expandState
        ? children
        : children.slice().split(" ").slice(0, collapsedNumWords).join(" ") +
          "..."}
      <button style={btnStyle} onClick={() => setExpandState(!expandState)}>
        {expandState ? collapseButtonText : expandButtonText}
      </button>
    </div>
  );
}

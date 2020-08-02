import React from "react";
import "./SectionHeader.scss";

function SectionHeader(props) {
  // Render nothing if no title or subtitle
  if (!props.title && !props.subtitle) {
    return null;
  }

  return (
    <header
      className={
        "SectionHeader" + (props.className ? ` ${props.className}` : "")
      }
    >
      {props.title && (
        <h1 className="SectionHeader__no-classname">{props.title}</h1>
      )}

      {props.subtitle && (
        <p className="SectionHeader__subtitle mb-0">{props.subtitle}</p>
      )}
    </header>
  );
}

export default SectionHeader;

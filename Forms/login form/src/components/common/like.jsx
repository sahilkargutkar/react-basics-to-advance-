import React from "react";
import { faThumbsUp as fasThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp as farThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Like = (props) => {
  let thumb = !props.liked ? farThumbsUp : fasThumbsUp;
  return (
    <>
      <FontAwesomeIcon
        onClick={props.onClick}
        style={{ cursor: "pointer" }}
        icon={thumb}
      />
    </>
  );
};

export default Like;

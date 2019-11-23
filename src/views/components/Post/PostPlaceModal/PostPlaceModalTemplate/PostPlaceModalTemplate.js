import React, { useState } from "react";
import styles from "./PostPlaceModalTemplate.scss";
import classNames from "classnames/bind";
import PostTagModalInput from "../../PostTagModal/PostTagModalInput/PostTagModalInput";
import PostPlaceModalList from "../PostPlaceModalList";

const cx = classNames.bind(styles);

const PostPlaceModalTemplate = ({ ...props }) => {
  const [places, setPlaces] = useState([
    "영등포역",
    "영등포구",
    "영등포구청역",
    "오목교역",
    "선유도역",
    "문래역",
    "영등포시장역"
  ]);
  const [filteredPlaceValue, setFilteredPlaceValue] = useState("");

  let filteredPlaces = places.filter(val => val.includes(filteredPlaceValue));

  return (
    <div className={cx("modal__wrapper")}>
      <PostTagModalInput setFilteredPlaceValue={setFilteredPlaceValue} />
      <PostPlaceModalList
        handleAddPlace={props.handleAddPlace}
        places={filteredPlaces}
      />
    </div>
  );
};

export default PostPlaceModalTemplate;

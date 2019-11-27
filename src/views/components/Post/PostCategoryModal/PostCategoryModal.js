import React from "react";
import styles from "./PostCategoryModal.scss";
import classNames from "classnames/bind";
import PropTypes from "prop-types";

const cx = classNames.bind(styles);

const Category = ({ ...props }) => {
  const handleKind = value => {
    props.setKind(value);
    props.handleCategoryModal();
  };
  return (
    <div
      className={cx("category__kind")}
      onClick={() => handleKind(props.value)}
    >
      {props.value}
    </div>
  );
};

const PostCategoryModal = ({ ...props }) => {
  return (
    <>
      <div className={cx("modal")}>
        <div
          className={cx("modal__background")}
          onClick={props.handleCategoryModal}
        />
        <div className={cx("modal__category")}>
          <div className={cx("modal__header")}>
            <div className={cx("modal__title")}>카테고리</div>
            <div
              className={cx("modal__close")}
              onClick={props.handleCategoryModal}
            >
              X
            </div>
          </div>
          <Category
            value="고백썰"
            setKind={props.setKind}
            handleCategoryModal={props.handleCategoryModal}
          />
          <Category
            value="이별썰"
            setKind={props.setKind}
            handleCategoryModal={props.handleCategoryModal}
          />
          <Category
            value="이상형썰"
            setKind={props.setKind}
            handleCategoryModal={props.handleCategoryModal}
          />
        </div>
      </div>
    </>
  );
};

PostCategoryModal.propTypes = {
  setKind: PropTypes.func,
  handleCategoryModal: PropTypes.func
};

PostCategoryModal.defaultProps = {
  setKind: () => {
    console.log("setKind is null");
  },
  handleCategoryModal: () => {
    console.log("handleCategoryModal is null");
  }
};

export default PostCategoryModal;

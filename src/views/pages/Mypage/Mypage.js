import React from "react";
import styles from "./Mypage.scss";
import classNames from "classnames/bind";
import Navbar from "../../components/Navbar/Navbar";
import Icon from "../../components/Icon/Icon";
import Itemlist from "./itemlist/itemlist";

const cx = classNames.bind(styles);

const Mypage = ({ ...props }) => {

  return (
    <div className={cx("template")}>
      <Navbar />
      <div className={cx("Mypageheader")}>
        <div className={cx("header__usericon")}>
          <Icon type='location-2' />
        </div>
        <div className={cx("header__username")}>{props.name}</div>
        <div className={cx("header__editicon")}>수정</div>
        <hr className={cx("header__hr")}/>
      </div>
      <div className={cx("box")}>
        <div className={cx("box__count")}>{props.mycontentcount}</div>
        <div className={cx("box__title")}>작성한 글</div>
      </div>

      <div className={cx("box")} >
        <div className={cx("box__count")}>{props.mycommentcount}</div>
        <div className={cx("box__title")}>댓글 단 글</div>
      </div>

      <div className={cx("box")}>
        <div className={cx("box__count")}>{props.mylikecount}</div>
        <div className={cx("box__title")}>좋아한 글</div>
      </div>
      <Itemlist /> 
    </div>
  );
};

Mypage.prototype = {};
Mypage.defaultProps = {
  mycontentcount: 0,
  mycommentcount: 0,
  mylikecount: 0
};

export default Mypage;

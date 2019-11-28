import React from "react";
import styles from "./Mypage.scss";
import classNames from "classnames/bind";
import Navbar from "../../components/Navbar/Navbar";
import Icon from "../../components/Icon/Icon";
import Item from "./item/item"

const cx = classNames.bind(styles);

const Mypage = ({ ...props }) => {

  return (
    <div className={cx("template")}>
      <Navbar />
      <div className={cx("header")}>
        <div className={cx("header__usericon")}>
          <Icon type='test' />
        </div>
        <div className={cx("header__username")}>{props.name}</div>
<<<<<<< HEAD
        <div className={cx("header__editicon")}>
          <Icon type='test' />
        </div>
        <hr />
=======
        <div className={cx("header__editicon")}>수정</div>
        <hr className={cx("header__hr")}/>
      </div>
      <div className={cx("box")}>
        <div className={cx("box__count")}>{props.mycontentcount}</div>
        <div className={cx("box__title")}>작성한 글</div>
>>>>>>> e907aec... style. assets에 로그인 로고 추가 docs. 마이페이지
      </div>

      <div className={cx("box")} >
        <div className={cx("box__count")}>{props.mycommentcount}</div>
        <div className={cx("box__title")}>댓글 단 글</div>
      </div>

      <div className={cx("box")}>
        <div className={cx("box__count")}>{props.mylikecount}</div>
        <div className={cx("box__title")}>좋아한 글</div>
      </div>
      <div className={cx("support")}>
        <div className={cx("item__title")}>지원</div>
        <Item title='문의하기' />
      </div>
      <div className={cx("account")}>
        <div className={cx("item__title")}>계정</div>
        <Item title='로그아웃' />
      </div>
    </div>
  );
};

Mypage.prototype = {

};
Mypage.defaultProps = {
  mycontentcount: 0,
  mycommentcount:0,
  mylikecount:0
};

export default Mypage;

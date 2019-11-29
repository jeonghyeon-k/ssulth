import React from "react";
import Item from "../item/item"
import styles from "./itemlist.scss";
import classNames from "classnames/bind";

export const itemlist = () => {
  const cx = classNames.bind(styles);
  return (
    <div>
      <div className={cx("support")}>
        <div className={cx("item__title")}>지원</div>
        <Item title='공지사항' />
        <hr className={cx("item__hr")}/>
        <Item title='도움말' />
        <hr className={cx("item__hr")}/>
        <Item title='문의하기' />
      </div>
      <div className={cx("account")}>
        <div className={cx("item__title")}>계정</div>
        <Item title='로그아웃' />
      </div>
    </div>
  );
};
export default itemlist;

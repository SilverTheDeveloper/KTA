import React from "react";
import Styles from "./BreadCrumb.module.scss";
import { Link } from "react-router-dom";

const BreadCrumb = ({ items }) => {
  return (
    <nav aria-label="breadcrumb">
      <ol className={Styles.breadcrumb}>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className={Styles.item}>
              {isLast ? (
                <span className={Styles.active}>{item.label}</span>
              ) : (
                <Link to={item.path} className={Styles.link}>
                  {item.label}
                </Link>
              )}
              {!isLast && <span className={Styles.separator}>/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default BreadCrumb;

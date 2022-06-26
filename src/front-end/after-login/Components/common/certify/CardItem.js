/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { Link } from "react-router-dom";

function CardItem(props) {
  return (
    <>
      <li className="certify_cards__item">
        <Link className="certify_cards__item__link" to={props.path}>
          <figure className="certify_cards__item__pic-wrap" data-category={props.label}>
            <img
              className="certify_cards__item__img"
              alt="Product Image"
              src={props.src}
            />
          </figure>
          <div className="certify_cards__item__info">
            <h5 className="certify_cards__item__text">{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
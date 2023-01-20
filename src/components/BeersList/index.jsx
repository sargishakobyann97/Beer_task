import React from "react";
import { t } from "i18next";
import "./style.scss";
import { Link } from "react-router-dom";

function BeersList({ beersList, page, back, next }) {
    return (
        <div className="beers-list-container">
            {beersList.map((item, i) => (
                <Link to={"/" + item.id} key={i}>
                    <div className="item">
                        <img src={item.image_url} alt={item.image_url} />
                        <h2>{item.name}</h2>
                        <p>{item.description.length > 140 ? item.description.substring(0, 140) + " ..." : item.description}</p>
                    </div>
                </Link>
            ))}
            <div className="pagination-btns">
                <span onClick={back}>{t("back")}</span>
                <span>{page}</span>
                <span onClick={next}>{t("next")}</span>
            </div>
        </div>
    );
}

export default BeersList;

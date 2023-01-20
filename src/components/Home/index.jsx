import { t } from "i18next";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getBeerAsync } from "../../store/features/beersSlice";
import BeersList from "../BeersList";
import "./style.scss";

function Home() {
    const dispatch = useDispatch();
    const {
        beers: { page, beersList },
    } = useSelector((state) => state);

    const [searchInputValue, setSearchInputValue] = useState("");
    const [showBeersList, setShowBeersList] = useState(false);

    const clearSearchInputValue = () => setSearchInputValue("");
    const changeSearchInputValue = (e) => setSearchInputValue(e.target.value);
    const toggleShowBeersList = () => {
        dispatch(getBeerAsync({ beerName: searchInputValue, page: 1 }));
        setShowBeersList(!showBeersList);
    };

    const back = () => !(page - 1 < 1) && dispatch(getBeerAsync({ beerName: searchInputValue, page: page - 1 }));
    const next = () => dispatch(getBeerAsync({ beerName: searchInputValue, page: page + 1 }));
    const keyDown = (e) => e.keyCode === 13 && !showBeersList && toggleShowBeersList();

    // debounce
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            dispatch(getBeerAsync({ beerName: searchInputValue, page }));
        }, 500);
        return () => clearTimeout(timeoutId);
    }, [searchInputValue]);

    return (
        <div className="home-wrapper">
            <div className={`search-container ${showBeersList && !!beersList.length && "show-beers-list"}`}>
                <h1>{t("searchInputTitle")}</h1>
                <input className="search-input" type="text" value={searchInputValue} onChange={changeSearchInputValue} onKeyDown={keyDown} />
                <span className="clear-value" onClick={clearSearchInputValue}>
                    &#128473;
                </span>
                <span className="search" onClick={toggleShowBeersList}>
                    &#128269;
                </span>
                {!!beersList.length && !showBeersList && (
                    <div className="beer-small-list">
                        {beersList.map((el, i) => (
                            <Link to={"/" + el.id} key={i}>
                                <p>
                                    <img src={el.image_url} alt={el.name} />
                                    <span>{el.name}</span>
                                </p>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
            {showBeersList && !!beersList.length && <BeersList beersList={beersList} back={back} next={next} page={page} />}
        </div>
    );
}

export default Home;

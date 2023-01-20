import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import "./style.scss";

function BeerView() {
    const { id } = useParams();
    const navigate = useNavigate();
    const {
        beers: { beersList },
    } = useSelector((state) => state);

    const goToHome = () => navigate("/");

    const showBeerItem = beersList.find((beer) => beer.id === +id);
    console.log(showBeerItem);
    useEffect(() => {
        if (!showBeerItem) goToHome();
    }, [showBeerItem]);
    return (
        <div className="beer-item-wrapper">
            <div className="content">
                <div className="beer-img-container">
                    <span className="back" onClick={goToHome}>
                        Back
                    </span>
                    <img src={showBeerItem?.image_url} alt={showBeerItem?.name} />
                </div>
                <div className="beer-info">
                    <h1>Name : {showBeerItem?.name}</h1>
                    <h3> Tagline : {showBeerItem?.tagline}</h3>
                    <p>
                        <b> Description : </b>
                        {showBeerItem?.description}
                    </p>
                    <p>
                        <b>ABV : </b> {showBeerItem?.abv}
                    </p>
                    <div>
                        <h2>Food Pairing :</h2>
                        <ol>
                            {showBeerItem?.food_pairing.map((el, i) => (
                                <li key={i}>{el}</li>
                            ))}
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BeerView;

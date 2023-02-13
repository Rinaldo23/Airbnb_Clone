import { Link } from "react-router-dom";
import "./SearchItem.css";

const SearchItem = ({ item }) => {
    return (
        <div className="searchItem">
            <img src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o=" alt="" className="siImg" />
            <div className="siDesc">
                <h1 className="siTitle">Oberoi</h1>
                <span className="siDistance">500m from center</span>
                <span className="siTaxiOp">Free airport taxi</span>
                <span className="siSubtitle">
                    Studio Apartment with Air conditioning
                </span>
                <span className="siFeatures">Best Hotel in Juhu</span>
                <span className="siCancelOp">Free cancellation </span>
                <span className="siCancelOpSubtitle">
                    You can cancel later, so lock in this great price today!
                </span>
            </div>
            <div className="siDetails">
                <div className="siRating">
                    <span>Excellent</span>
                    <button>4⭐</button>
                </div>
                <div className="siDetailTexts">
                    <span className="siPrice">$150</span>
                    <span className="siTaxOp">Includes taxes and fees</span>
                    <Link to={`/hotels/*`}>
                        <button className="siCheckButton">See availability</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SearchItem;
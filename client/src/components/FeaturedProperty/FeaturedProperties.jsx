import "./FeaturedProperties.css"
import useFetch from "../../hooks/useFetch"

const FeaturedProperties = () => {

    const { data, loading, error } = useFetch("http://localhost:8800/api/hotels?limit=4");
    console.log(data)

    return (
        <div className="fp">
            {
                loading ? "Loading Please Wait!!" : <>
                    {
                        data.map((item, i) => (
                            <div className="fpItem" key={i}>
                                <img
                                    src={item?.photos[i]}
                                    className="fpImg"
                                />
                                <span className="fpName">{item?.title}</span>
                                <span className="fpCity">{item?.city}</span>
                                <span className="fpPrice">Starting from ${item?.cheapestPrice}</span>
                                <div className="fpRating">
                                    <button>4⭐</button>
                                    <span>Excellent</span>
                                </div>
                            </div>
                        ))
                    }
                </>
            }
        </div>
    )
}

export default FeaturedProperties
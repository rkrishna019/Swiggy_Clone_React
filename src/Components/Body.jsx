import Resturant_Card from "./Resturant_Card";
import Shimmer from "./Shimmer";
import resList from "../Utils/mockData";
import { useState, useEffect } from "react";
const Body = () => {
  const [listOfResturants, setlistofResturants] = useState([]);
  const [fil_Res, setFil_Res] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    setlistofResturants(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    setFil_Res(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
  };

  if (listOfResturants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div>
      <div className="Button_container">
        <div className="search_Bar">
          <input
            type="text"
            className="search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />

          <button
            onClick={() => {
              console.log(searchText);
              let filRes = listOfResturants.filter((r) => 
                r.info.name.toLowerCase().includes(searchText.toLowerCase())
            );

              setFil_Res(filRes);
            }}
          >
            Search
          </button>
        </div>

        <button
          className="Button"
          onClick={() => {
            const filteredList = listOfResturants.filter(
              (res) => res.info.avgRating > 4
            );
            setFil_Res(filteredList);
          }}
        >
          {" "}
          Top Rated Resturants
        </button>
      </div>

      <div className="res_Container">
        {fil_Res.map((resturant) => (
          <Resturant_Card key={resturant.info.id} resData={resturant} />
        ))}
      </div>
    </div>
  );
};

export default Body;

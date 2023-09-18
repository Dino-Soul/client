import React from "react";
import "./Map.css";

const categories = [
  {
    id: "restaurantMenu",
    label: "맛집",
    category: "restaurant",
    icon: "ico_restaurant",
  },
  {
    id: "lodgingMenu",
    label: "숙박",
    category: "lodging",
    icon: "ico_lodging",
  },
  {
    id: "shoppingMenu",
    label: "쇼핑",
    category: "shopping",
    icon: "ico_shopping",
  },
  {
    id: "sightseeingMenu",
    label: "자연관광",
    category: "sightseeing",
    icon: "ico_sightseeing",
  },
  {
    id: "humanitiesMenu",
    label: "인문",
    category: "humanities",
    icon: "ico_humanities",
  },
  {
    id: "leisureMenu",
    label: "레포츠",
    category: "leisure",
    icon: "ico_leisure",
  },
];

function MapCategory({ setSelectedCategory }) {
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="category">
      <ul>
        {categories.map(({ id, label, category, icon }) => (
          <li key={id} id={id} onClick={() => handleCategoryClick(category)}>
            <span className={`ico_comm ${icon}`}></span>
            {label}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MapCategory;

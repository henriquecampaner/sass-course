import React from "react";
import { FaStar, FaMapMarkerAlt } from "react-icons/fa";

import hotelPhoto from "../../assets/hotel-1.jpg";
import hotelPhoto2 from "../../assets/hotel-2.jpg";
import hotelPhoto3 from "../../assets/hotel-3.jpg";

const HotelView = () => {
  return (
    <main className="hotel-view">
      <div className="gallery">
        <figure className="gallery__item">
          <img src={hotelPhoto} alt="Hotel 1" className="gallery__photo" />
        </figure>

        <figure className="gallery__item">
          <img src={hotelPhoto2} alt="Hotel 1" className="gallery__photo" />
        </figure>

        <figure className="gallery__item">
          <img src={hotelPhoto3} alt="Hotel 1" className="gallery__photo" />
        </figure>
      </div>

      <div className="overview">
        <h1 className="overview__heading">Hotel Las Palmas</h1>

        <div className="overview__stars">
          <FaStar className="overview__icon-star" />
          <FaStar className="overview__icon-star" />
          <FaStar className="overview__icon-star" />
          <FaStar className="overview__icon-star" />
          <FaStar className="overview__icon-star" />
        </div>

        <div className="overview__location">
          <FaMapMarkerAlt className="overview__icon-location" />
          <button type="button" className="btn-inline">
            Albufeira, Portugal
          </button>
        </div>

        <div className="overview__rating">
          <div className="overview__rating-average">8.6</div>
          <div className="overview__rating-count">234</div>
        </div>
      </div>
    </main>
  );
};

export default HotelView;

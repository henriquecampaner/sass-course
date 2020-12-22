import React from "react";
import { FaStar, FaMapMarkerAlt } from "react-icons/fa";

import hotelPhoto from "../../assets/hotel-1.jpg";
import hotelPhoto2 from "../../assets/hotel-2.jpg";
import hotelPhoto3 from "../../assets/hotel-3.jpg";

import friendsPhoto from "../../assets/user-3.jpg";
import friendsPhoto2 from "../../assets/user-4.jpg";
import friendsPhoto3 from "../../assets/user-5.jpg";
import friendsPhoto4 from "../../assets/user-6.jpg";

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
          <div className="overview__rating-count">234 votes</div>
        </div>
      </div>

      <div className="detail">
        <div className="description">
          <p className="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi
            dignissimos debitis ratione sapiente saepe. Accusantium cumque,
            quas, ut corporis incidunt deserunt quae architecto voluptate.
          </p>
          <p className="paragraph">
            Accusantium cumque, quas, ut corporis incidunt deserunt quae
            architecto voluptate delectus, inventore iure aliquid aliquam.
          </p>

          <ul className="list">
            <li className="list__item">Close to the beach</li>
            <li className="list__item">Breakfast included</li>
            <li className="list__item">Free airport shuttle</li>
            <li className="list__item">Free wifi in all rooms</li>
            <li className="list__item">Air conditioning and heating</li>
            <li className="list__item">Pets allowed</li>
            <li className="list__item">We speak all languages</li>
            <li className="list__item">Perfect for families</li>
          </ul>

          <div className="recommend">
            <p className="recommend__count">
              Lucy and 3 other friends recommend this hotel.
            </p>
            <div className="recommend__friends">
              <img
                src={friendsPhoto}
                alt="Friend 1"
                className="recommend__photo"
              />

              <img
                src={friendsPhoto2}
                alt="Friend 2"
                className="recommend__photo"
              />

              <img
                src={friendsPhoto3}
                alt="Friend 3"
                className="recommend__photo"
              />

              <img
                src={friendsPhoto4}
                alt="Friend 4"
                className="recommend__photo"
              />
            </div>
          </div>
        </div>

        <div className="user-reviews">oi</div>
      </div>
    </main>
  );
};

export default HotelView;

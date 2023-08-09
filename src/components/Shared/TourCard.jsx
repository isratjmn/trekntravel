/* eslint-disable */
/* eslint-disable */

import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import "./tour-card.css";
import calculateAvgRating from "../../utilis/avgRating";
import { FaStar } from "react-icons/fa";
import { MdShareLocation } from "react-icons/md";

const TourCard = ({ tour }) => {
	const { id, title, photo, city, price, featured, reviews } = tour;
	const { totalRating, avgRating } = calculateAvgRating(reviews);

	return (
		<div className="tour__card">
		<Card>
			<div className="tour__img">
			<img src={photo} alt="img" />
			{featured && <span>Featured</span>}
			</div>
		</Card>

		<Card.Body className="card-body">
			<div className="card__top d-flex align-items-center justify-content-between">
			<span className="tour__location d-flex align-items-center gap-1">
				{/* <i class="ri-map-pin-range-fill"></i> */}
				<MdShareLocation />
				{city}
			</span>
			<span className="tour__rating d-flex align-items-center gap-1">
				{/* <i class="ri-star-fill"></i>  */}
				<FaStar />
				{avgRating === 0 ? null : avgRating}
				{totalRating === 0 ? "Not Rated" : <span>({reviews.length})</span>}
			</span>
			</div>
			<h5 className="tour__title">
			<Link to={`/tours/${id}`}> {title}</Link>
			</h5>
			<div className="card__bottom d-flex align-items-center justify-content-between mt-3">
			<h5>
				${price} <span> /Per Person</span>
			</h5>
			<button className="btn booking__btn">
				<Link to={`/tours/${id}`}>Book Now</Link>
			</button>
			</div>
		</Card.Body>
		</div>
	);
};

export default TourCard;

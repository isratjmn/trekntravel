/* eslint-disable */
import "./service-card.css";
export const ServiceCard = ({ item }) => {
	const { imgUrl, title, desc } = item;
	return (
		<div className="service__item">
			<div className="service__img">
				<img src={imgUrl} alt="img" />
			</div>
			<h5>{title}</h5>
			<p>{desc}</p>
		</div>
	);
};

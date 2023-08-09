/* eslint-disable */

import Col from 'react-bootstrap/Col';
import TourCard from "../Shared/TourCard";
import tourData from "../../assets/data/tours";

const FeaturedToursList = () => {
	return (
		<>
			{tourData?.map((tour) => (
				<Col lg="3" className="mb-4" key={tour.id}>
					<TourCard tour={tour} />
				</Col>
			))}
		</>
	);
};

export default FeaturedToursList;

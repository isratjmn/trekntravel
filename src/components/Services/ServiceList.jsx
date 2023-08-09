
import { ServiceCard } from "./ServiceCard";

import weatherImg from "../../assets/images/weather.png";
import guideImg from "../../assets/images/guide.png";
import customizationImg from "../../assets/images/customization.png";
import Col from 'react-bootstrap/Col';

const serviceData = [
	{
		imgUrl: weatherImg,
		title: "Calcute Weather",
		desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde hic.",
	},
	{
		imgUrl: guideImg,
		title: "Best Tour Guide",
		desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde hic.",
	},
	{
		imgUrl: customizationImg,
		title: "CustomizationImg",
		desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde hic.",
	},
];
const ServiceList = () => {
	return (
		<>
			{serviceData.map((item, index) => (
				<Col lg="3" key={index}>
					<ServiceCard item={item}></ServiceCard>
				</Col>
			))}
		</>
	);
};

export default ServiceList;

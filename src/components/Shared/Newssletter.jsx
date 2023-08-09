/* eslint-disable */

import "./Newssletter.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import maleTourist from "./../../assets/images/male-tourist.png";

const Newssletter = () => {
	return (
		<section className="newsletter">
			<Container>
				<Row>
					<Col lg="6">
						<div className="newsletter__content">
							<h2 className="fw-bold">
								Subscibe Now To Get Useful Traveling
								Information.
							</h2>
							<div className="newsletter__input">
								<input
									type="email"
									placeholder="Enter your Email"
								/>
								<button className="btn newsletter__btn">
									Subscribe
								</button>
							</div>
							<p>
								Lorem ipsum dolor sit, amet consectetur
								adipisicing elit. Sed eius in, natus saepe
								maxime facilis cupiditate quae odio ea ab.
							</p>
						</div>
					</Col>
					<Col lg="6">
						<div className="newsletter__img">
							<img src={maleTourist} alt="" />
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Newssletter;

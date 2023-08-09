
// import { Col, Container, Row } from "reactstrap";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Subtitle from "../components/Shared/Subtitle";
import worldImg from "../assets/images/world.png";
import heroImg1 from "../assets/images/hero-img01.jpg";
import heroImg2 from "../assets/images/hero-img02.jpg";
import heroVideo from "../assets/images/hero.mp4";
import SearchBar from "./../components/Shared/SearchBar";
import ServiceList from "../components/Services/ServiceList";
import experienceImg from "../assets/images/experience.png";
import FeaturedToursList from "../components/FeaturedTours/FeaturedToursList";
import MasonaryImages from "../components/Image-gallery/MasonaryImages";
import Testimonials from "../components/Testimonial/Testimonials";
import Newssletter from "../components/Shared/Newssletter";
import "../styles/Home.css";

const Home = () => {
	return (
		<>
			{/* ============== Hero Section Start ============== */}
			<section>
				<Container>
					<Row>
						<Col lg="6">
							<div className="hero__content">
								<div className="hero__subtitle d-flex align-items-center">
									<Subtitle subtitle={"Know Before You Go"} />
									<img src={worldImg} alt="img1" />
								</div>
								<h1>
									Travelling Opens the door to Creating
									<span className="highlight"> Memories</span>
								</h1>
								<p>
									Lorem ipsum dolor sit, amet consectetur
									adipisicing elit. Nostrum a quis laboriosam
									voluptates accusantium ratione quisquam
									dolore officiis consequuntur pariatur!
									Consequuntur adipisci maxime nam laborum a
									possimus repudiandae ipsum reprehenderit?
								</p>
							</div>
						</Col>
						<Col lg="2">
							<div className="hero__img-box">
								<img src={heroImg1} alt="" />
							</div>
						</Col>

						<Col lg="2">
							<div className="hero__img-box mt-4">
								<video src={heroVideo} controls></video>
							</div>
						</Col>

						<Col lg="2">
							<div className="hero__img-box mt-5">
								<img src={heroImg2} alt="" />
							</div>
						</Col>
						<SearchBar />
					</Row>
				</Container>
			</section>
			{/* ============== Hero Section Ends ============== */}
			<section>
				<Container>
					<Row>
						<Col lg="3">
							<h5 className="services__subtitle">
								What We Serve
							</h5>
							<h2 className="fw-bold service__title">
								We Offer Our Best Services
							</h2>
						</Col>
						<ServiceList />
					</Row>
				</Container>
			</section>

			{/* ============== Featured Tour Section Start ============== */}
			<section>
				<Container>
					<Row>
						<Col lg="12" className="mb-5">
							<Subtitle subtitle={"Explode"} />
							<h2 className="fw-bold featured__tour-title">
								Our Featured Tours
							</h2>
						</Col>
						<FeaturedToursList />
					</Row>
				</Container>
			</section>
			{/* ============== Featured Tour Section End ============== */}
			{/* ============== Experience Section Start ============== */}
			<section>
				<Container>
					<Row>
						<Col lg="6">
							<div className="experience__content">
								<Subtitle subtitle={"Experience"} />
								<h2>
									With our all Experience <br /> We will serve
									you.
								</h2>
								<p>
									Lorem ipsum dolor, sit amet consectetur
									adipisicing elit. <br /> Aperiam quos est
									velit accusamus. Consectetur, laboriosam!
								</p>
								<h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum provident nisi accusamus quibusdam itaque quis esse eligendi dolor nihil. Sapiente.</h1>
							</div>
							<div className="counter__wrapper d-flex align-items-center gap-5">
								<div className="counter__box">
									<span>12K+</span>
									<h6>Successfull Trip</h6>
								</div>
								<div className="counter__box">
									<span>2K+</span>
									<h6>Regular Clients</h6>
								</div>
								<div className="counter__box">
									<span>5</span>
									<h6>Years Experience</h6>
								</div>
							</div>
						</Col>
						<Col lg="6">
							<div className="experience__img">
								<img src={experienceImg} alt="img" />
							</div>
						</Col>
					</Row>
				</Container>
			</section>
			{/* ============== Experience Section End ============== */}
			{/* ============== Gallery Section Start ============== */}
			<section>
				<Container>
					<Row>
						<Col lg="12">
							<Subtitle subtitle={"Gallery"} />
							<h2 className="gallery__title">
								Visit Our Customers Tour Gallery
							</h2>
						</Col>
						<Col lg="12">
							<MasonaryImages />

						</Col>
					</Row>
				</Container>
			</section>
			{/* ============== Gallery Section End ============== */}
			{/* ============== Testimonial Section Start ============== */}
			<section>
				<Container>
					<Row>
						<Col lg="12">
							<Subtitle subtitle={"Fans Love"} />
							<h2 className="fw-bold testimonial__title">
								What Our fans Says About Us
							</h2>
							h2
							
						</Col>
						<Col lg="12">
							<Testimonials />
						</Col>
					</Row>
				</Container>
			</section>
			{/* ============== Testimonial Section End ============== */}
			<Newssletter />
		</>
	);
};

export default Home;

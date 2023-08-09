/* eslint-disable */

import Slider from "react-slick";
import ava01 from "../../assets/images/ava-1.jpg";
import ava02 from "../../assets/images/ava-2.jpg";
import ava03 from "../../assets/images/ava-3.jpg";

const Testimonials = () => {
	const settings = {
		dots: true,
		infinite: true,
		autoplay: true,
		speed: 1000,
		swipeToSlide: true,
		autoplaySpeed: 2000,
		slidesToShow: 3,

		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
				},
			},
		],
	};
	return (
		<Slider {...settings}>
			<div className="testimonial px-3 py-4">
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Adipisci officiis ipsam odio, molestiae veritatis eius facere
				quam delectus exercitationem amet.
				<div className="d-flex align-items-center gap-4 mt-3">
					<img
						src={ava01}
						className="w-25 h-25 rounded-3"
						alt="img"
					/>
					<div>
						<h6 className="mb-0 mt-3 fw-bold">franklin Willson</h6>
						<p>Customer</p>
					</div>
				</div>
			</div>
			<div className="testimonial px-3 py-4">
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Adipisci officiis ipsam odio, molestiae veritatis eius facere
				quam delectus exercitationem amet.
				<div className="d-flex align-items-center gap-4 mt-3">
					<img
						src={ava02}
						className="w-25 h-25 rounded-3"
						alt="img"
					/>
					<div>
						<h6 className="mb-0 mt-3 fw-bold">John Doe</h6>
						<p>Customer</p>
					</div>
				</div>
			</div>
			<div className="testimonial px-3 py-4">
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Adipisci officiis ipsam odio, molestiae veritatis eius facere
				quam delectus exercitationem amet.
				<div className="d-flex align-items-center gap-4 mt-3">
					<img
						src={ava03}
						className="w-25 h-25 rounded-3"
						alt="img"
					/>
					<div>
						<h6 className="mb-0 mt-3 fw-bold">Smith John</h6>
						<p>Customer</p>
					</div>
				</div>
			</div>
			<div className="testimonial px-3 py-4">
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Adipisci officiis ipsam odio, molestiae veritatis eius facere
				quam delectus exercitationem amet.
				<div className="d-flex align-items-center gap-4 mt-3">
					<img
						src={ava01}
						className="w-25 h-25 rounded-3"
						alt="img"
					/>
					<div>
						<h6 className="mb-0 mt-3 fw-bold">franklin Willson</h6>
						<p>Customer</p>
					</div>
				</div>
			</div>
			<div className="testimonial px-3 py-4">
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Adipisci officiis ipsam odio, molestiae veritatis eius facere
				quam delectus exercitationem amet.
				<div className="d-flex align-items-center gap-4 mt-3">
					<img
						src={ava02}
						className="w-25 h-25 rounded-3"
						alt="img"
					/>
					<div>
						<h6 className="mb-0 mt-3 fw-bold">John Doe</h6>
						<p>Customer</p>
					</div>
				</div>
			</div>
		</Slider>
	);
};

export default Testimonials;

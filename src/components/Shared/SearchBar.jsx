import { useRef } from "react";
import "./search-bar.css";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { RiMapPin4Fill } from "react-icons/ri";
import { BiSolidMapPin } from "react-icons/bi";
import { HiUserGroup } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";

const SearchBar = () => {
	const locationRef = useRef("");
	const distanceRef = useRef(0);
	const maxGroupSizeRef = useRef(0);

	const searchHandler = () => {
		const location = locationRef.current.value;
		const distance = distanceRef.current.value;
		const maxGroupSize = maxGroupSizeRef.current.value;

		if (location === "" || distance === "" || maxGroupSize === "") {
		return alert("All Fields are Required!!");
		}
	};

	return (
		<Col lg="12">
		<div className="search__bar">
			<Form className="d-flex align-items-center gap-4">
			<Form.Group className="d-flex gap-3 form__group form__group-fast">
				<span>
				<RiMapPin4Fill />
				</span>
				<div>
				<h6 className="fw-bold">location</h6>
				<input
					type="text"
					placeholder="Where are You Going"
					ref={locationRef}
				/>
				</div>
			</Form.Group>
			<Form.Group className="d-flex gap-3 form__group form__group-fast">
				<span>
				<BiSolidMapPin />
				</span>
				<div>
				<h6 className="fw-bold">Distance</h6>
				<input
					type="number"
					placeholder="Distance K/M"
					ref={distanceRef}
				/>
				</div>
			</Form.Group>
			<Form.Group className="d-flex gap-3 form__group form__group-last">
				<span>
				{/* <i class="ri-group-line"></i> */}
				<HiUserGroup />
				</span>
				<div>
				<h6 className="fw-bold">Max People</h6>
				<input type="number" placeholder="1" ref={maxGroupSizeRef} />
				</div>
			</Form.Group>
			<span className="search__icon" type="submit" onClick={searchHandler}>
				{/* <i class="ri-search-fill"></i> */}
				<FiSearch />
			</span>
			</Form>
		</div>
		</Col>
	);
};

export default SearchBar;

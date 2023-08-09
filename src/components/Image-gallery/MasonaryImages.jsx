
import galleryImages from "./galleryImages";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const MasonaryImages = () => {
	const getLastFourImages = () => galleryImages.slice(-4); 

	return (
		<ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 768: 4, 992: 4 }}>
			<Masonry gutter="1rem">
				{galleryImages.map((item, index) => {
					
					const isLastFourImage = getLastFourImages().includes(item);
					const imageClassName = isLastFourImage ? "masonry__img--last-four" : "masonry__img";

					return (
						<img
							className={imageClassName}
							key={index}
							src={item}
							alt="img"
						/>
					);
				})}
			</Masonry>
		</ResponsiveMasonry>
	);
};

export default MasonaryImages;

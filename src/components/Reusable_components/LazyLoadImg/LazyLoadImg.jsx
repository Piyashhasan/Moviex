import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const LazyLoadImg = ({ src, className }) => {
  console.log(className);
  return (
    <div>
      <LazyLoadImage
        className={className}
        alt="background-image"
        src={src}
        effect="blur"
        height="730px"
        width="100%"
      />
    </div>
  );
};

export default LazyLoadImg;

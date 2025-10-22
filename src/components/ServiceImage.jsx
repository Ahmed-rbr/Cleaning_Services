const ServiceImage = ({ src, alt }) => (
  <img
    src={src}
    alt={alt}
    className="w-full h-56 object-cover block"
    loading="lazy"
  />
);

export default ServiceImage;

import placeholderImage from "../assets/image-placeholder.svg";

// An image with two details:
// - one large soft curve on the top-left corner (the organic shape)
// - a thin line frame around it with small gaps, echoing the brackets in the logo
//
// Replace `src` (or the placeholder file in src/assets) with a real photo.
// fill:  the image fills the height of the space it is placed in (used on Home)
// lines: turn the line frame on or off
export default function OrganicFrame({ src = placeholderImage, alt = "", fill = false, lines = true }) {
  const className = ["organic-wrap", fill && "organic-wrap--fill", lines && "organic-wrap--lines"]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={className}>
      <div className="organic-frame">
        <img src={src} alt={alt} />
      </div>
    </div>
  );
}

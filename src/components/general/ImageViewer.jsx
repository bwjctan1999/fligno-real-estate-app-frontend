import { useEffect } from "react";
import ImageNotFound from "../../assets/imgs/ImageNotFound.png";

export default function ImageViewer({ images = [] }) {
  useEffect(() => console.log(images), []);

  const limitImageDisplay = () => {
    const images = [];

    for (let i = 1; i < images.length && i < 4; i++) {
      images.push(
        <img
          src={images[i]}
          alt="image"
          className="aspect-video w-full rounded-lg object-cover"
        />
      );
    }

    return images;
  };

  return (
    <div className="w-full lg:w-7/12">
      <img
        src={Array.isArray(images) ? images[0] : images}
        alt="image"
        className="aspect-video w-full rounded-lg object-cover"
      />
      <div className="mt-3 grid grid-cols-4 gap-3">
        {Array.isArray(images)
          ? limitImageDisplay().map((display) => display)
          : null}
      </div>
    </div>
  );
}

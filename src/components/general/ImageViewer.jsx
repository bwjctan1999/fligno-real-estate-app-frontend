export default function ImageViewer({ images = [] }) {
  return (
    <div>
      <img className="aspect-video" />
      //test
      <div>
        {images.map((img) => (
          <img src={img} />
        ))}
      </div>
    </div>
  );
}

export default function ImageViewer({ images = [] }) {
  return (
    <div>
      <img className="aspect-video" />

      <div>
        {images.map((img) => (
          <img src={img} />
        ))}
      </div>
    </div>
  );
}

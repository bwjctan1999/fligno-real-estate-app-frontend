export default function ImageViewer({ images = [] }) {
  return (
    <div>
      <img />
      <div>
        {images.map((img) => (
          <img src={img} />
        ))}
      </div>
    </div>
  );
}

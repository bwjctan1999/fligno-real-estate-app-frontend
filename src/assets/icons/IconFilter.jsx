export default function IconFilter({
  width,
  height,
  fill = "none",
  stroke = "currentColor",
}) {
  return (
    <svg
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={fill}
      stroke={stroke}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="feather feather-filter"
    >
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
    </svg>
  );
}

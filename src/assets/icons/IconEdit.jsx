export default function IconEdit({
  width = "25",
  height = "25",
  fill = "fill-TextPrimary",
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      className={fill}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.4671 3.29282C17.2439 3.09361 16.987 2.98668 16.6996 3.00133C16.4122 3.00133 16.1554 3.10826 15.9475 3.32359L14.2521 5.00956L19.0019 9.40834L20.7126 7.6916C20.9205 7.49239 21 7.23166 21 6.95628C21 6.6809 20.8884 6.42016 20.6805 6.2356L17.4671 3.29282ZM9.33719 19.0511C8.71346 19.2503 8.07444 19.4349 7.44918 19.6341C6.82545 19.8333 6.20173 20.0325 5.56118 20.2317C4.07371 20.6917 3.25736 20.9524 3.08155 20.9978C2.90575 21.0432 3.01735 20.3855 3.38577 19.0057L4.56902 14.6684L4.66686 14.5717L9.33872 19.0482L9.33719 19.0511ZM6.39588 12.8506L12.968 6.2854L17.7178 10.6681L11.0662 17.3256L6.39588 12.8506Z"
      />
      <defs>
        <linearGradient
          id="paint0_linear_232_2993"
          x1="3"
          y1="12"
          x2="21"
          y2="12"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#396AFC" />
          <stop offset="1" stopColor="#2948FF" />
        </linearGradient>
      </defs>
    </svg>
  );
}

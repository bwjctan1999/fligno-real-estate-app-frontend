export default function Button({
  text = "please change text parameter",
  fontsize = "text-base",
  padding = "p-3",
  bgcolor = "bg-gradient-to-r from-BtnPrimary-start to-BtnPrimary-end",
  textcolor = "text-TextOnDark",
  onClick,
}) {
  return (
    <button
      className={`${padding} ${bgcolor} ${textcolor} ${fontsize} p-3 rk rounded-lg bg-BGPrimary w-full max-w-md text-b font-bold`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

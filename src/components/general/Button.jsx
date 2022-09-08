export default function Button({
  text,
  fontsize = "text-base",
  padding = "p-3",
  bgcolor = "bg-gradient-to-r from-BtnPrimary-start to-BtnPrimary-end",
  textcolor = "text-TextOnDark",
  icon,
  custom,
  onClick,
  type,
}) {
  return (
    <button
      className={`${padding} ${bgcolor} ${textcolor} ${fontsize} ${custom} flex w-full items-center justify-center gap-3 rounded-lg bg-BGPrimary p-3 font-bold`}
      onClick={onClick}
    >
      {icon}
      {text}
    </button>
  );
}
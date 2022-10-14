export default function Button({
  text,
  fontsize = "text-base",
  padding = "p-3",
  bgcolor = "bg-gradient-to-r from-BtnPrimary-start to-BtnPrimary-end",
  textcolor = "text-TextOnDark",
  icon,
  custom,
  onClick,
  responsive,
  type,
}) {
  return (
    <button
      className={`${padding} ${bgcolor} ${textcolor} ${fontsize} ${custom} flex w-full items-center justify-center gap-2 rounded-lg bg-BGPrimary font-bold hover:scale-x-105`}
      onClick={onClick}
    >
      {icon}
      <span className={responsive === "true" ? "hidden md:block" : ""}>
        {text}
      </span>
    </button>
  );
}

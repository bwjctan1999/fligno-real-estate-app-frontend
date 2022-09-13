export default function ToggleButton({ id = "default-toggle" }) {
  return (
    <label
      for={id}
      className="relative inline-flex cursor-pointer items-center"
    >
      <input type="checkbox" value="" id={id} className="peer sr-only" />
      <div className="peer h-6 w-11 rounded-full bg-LineSecondary after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-LineSecondary after:bg-BGPrimary after:transition-all after:content-[''] peer-checked:bg-BtnPrimary-end peer-checked:after:translate-x-full peer-checked:after:border-BGPrimary peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-BtnPrimary-start dark:border-LineSecondary dark:bg-LineSecondary dark:peer-focus:ring-BtnPrimary-start"></div>
    </label>
  );
}

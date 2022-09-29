import IconArrowRight from "../../../assets/icons/IconArrowRight";
import IconArrowLeft from "../../../assets/icons/IconArrowLeft";
import { useState } from "react";

export default function Paginator({
  current = 1,
  last = 2,
  start_url,
  last_url,
  next_url,
  prev_url,
  changePage,
}) {
  const [buttons, setButtons] = useState([]);

  const getPageOnly = (url) => {
    const temp = url.split("?");
    return "?" + temp.pop();
  };

  const prevHandler = (current) => {
    if (current > 1)
      return (
        <a href="#client_properties">
          <button
            className="h-10 w-10 rounded-lg font-bold"
            onClick={() => changePage(getPageOnly(prev_url))}
          >
            {current - 1}
          </button>
        </a>
      );
  };

  const nextHandler = (current, last) => {
    if (current < last - 1)
      return (
        <a href="#client_properties">
          <button
            className="h-10 w-10 rounded-lg font-bold"
            onClick={() => {
              changePage(getPageOnly(next_url));
            }}
          >
            {current + 1}
          </button>
        </a>
      );
  };

  const currentHandler = (current) => {
    return (
      <button className="h-10 w-10 rounded-lg bg-gradient-to-r from-BtnPrimary-start to-BtnPrimary-end font-bold text-TextOnDark">
        {current}
      </button>
    );
  };

  return (
    <div className="mt-6 flex w-auto items-center justify-center rounded-full bg-BGSecondary p-2 px-6 text-TextSecondary shadow-md">
      <a href="#client_properties">
        <button onClick={() => changePage(getPageOnly(prev_url))}>
          <IconArrowLeft />
        </button>
      </a>

      {current > 2 ? (
        <button
          className="h-10 w-10 rounded-lg font-bold"
          onClick={() => changePage(getPageOnly(start_url))}
        >
          <a href="#client_properties">1</a>
        </button>
      ) : null}

      {current - 2 > 0 ? (
        <button className="h-10 w-10 rounded-lg font-bold">...</button>
      ) : null}

      {prevHandler(current)}
      {currentHandler(current)}
      {nextHandler(current, last)}

      {current + 2 < last ? (
        <button className="h-10 w-10 rounded-lg font-bold">...</button>
      ) : null}

      {current < last ? (
        <a href="#client_properties">
          <button
            className="h-10 w-10 rounded-lg font-bold"
            onClick={() => changePage(getPageOnly(last_url))}
          >
            {last}
          </button>
        </a>
      ) : null}

      <a href="#client_properties">
        <button onClick={() => changePage(getPageOnly(next_url))}>
          <IconArrowRight />
        </button>
      </a>
    </div>
  );
}
// bg-gradient-to-r from-BtnPrimary-start to-BtnPrimary-end font-bold text-TextOnDark

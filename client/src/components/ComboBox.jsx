import React from "react";

export default function ComboBox({
  id,
  name,
  value,
  option,
  onChange,
  isDisabled = false,
}) {
  // console.log(value);
  return (
    <select
      onChange={(event) => onChange(event, false)}
      name={name}
      id={id}
      value={value}
      disabled={isDisabled}
      className={`form-control w-full
        ${
          isDisabled
            ? "bg-gray-300 cursor-not-allowed hover:bg-gray-300"
            : "bg-violet-50"
        };`}
    >
      {option.map((el, idx) => {
        return (
          <option key={idx} value={el[0]} disabled={idx == 0 ? true : false}>
            {idx == 0 ? "Select..." : el[1]}
          </option>
        );
      })}
    </select>
  );
}

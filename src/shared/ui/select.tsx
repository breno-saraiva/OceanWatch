import React from "react";

type SelectProps = {
  title?: string;
  name?: string;
  options?: { value: string; label: string }[];
  value?: string;
  Onchange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const Select: React.FC<SelectProps> = ({
  title,
  name,
  options,
  Onchange,
  value,
}) => {
  return (
    <div className="flex flex-col mb-4">
      <label htmlFor={name} className="mb-[.6em] font-bold">
        {title}
      </label>
      <select
        name={name}
        id={name}
        value={value}
        onChange={Onchange}
        className="p-[.7em] rounded-none border-none text-[#7b7b7b]"
      >
        {options?.map(({ value, label }) => (
          <option value={value} key={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
};

export { Select };

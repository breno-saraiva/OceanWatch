import React from "react";

type InputProps = {
  type?: string;
  title?: string;
  name?: string;
  placeholder?: string;
  OnChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
};

const Input: React.FC<InputProps> = ({
  type,
  title,
  name,
  placeholder,
  OnChange,
  value,
}) => {
  return (
    <div className="flex flex-col mb-4">
      <label htmlFor={name} className="mb-[.6em] font-bold text-white">
        {title}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={OnChange}
        value={value}
        className="p-[.7em] rounded-none border-none placeholder:text-[#7b7b7b]"
      />
    </div>
  );
};

export { Input };

import React from "react";

type TextAreaProps = {
  title?: string;
  name?: string;
  rows: number;
  cols: number;
  OnChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const TextArea: React.FC<TextAreaProps> = ({
  title,
  name,
  rows,
  cols,
  OnChange,
}) => {
  return (
    <div className="flex flex-col mb-4">
      <label htmlFor={name} className="mb-[.6em] font-bold text-white">
        {title}
      </label>
      <textarea
        name={name}
        id={name}
        onChange={OnChange}
        rows={rows}
        cols={cols}
      ></textarea>
    </div>
  );
};

export { TextArea };

import React from 'react';

type Props = {
  className?: string;
  type?: string;
  classNameInput?: string;
  value?: any;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  classNameLabel?: string;
  label?: string;
};

const FloatingInput: React.FC<Props> = ({
  className,
  type,
  classNameInput,
  value,
  onChange,
  classNameLabel,
  label,
}) => {
  return (
    <div className={`border rounded pt-5  px-3 mb-3 ${className || ''}`}>
      <div className="relative">
        <input
          type={type}
          className={`block w-full appearance-none bg-transparent border-none p-0${
            classNameInput || ''
          }`}
          value={value}
          onChange={onChange}
          placeholder=" "
        />
        <label
          className={`absolute top-0 duration-300 origin-0 leading-6 ${
            classNameLabel || ''
          }`}
        >
          {label}
        </label>
      </div>
    </div>
  );
};

export default FloatingInput;

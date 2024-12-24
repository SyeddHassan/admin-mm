import React from "react";

import { CustomInputProps } from "@/interfaces/common-components-interface";

import { Label } from "../ui/label";
import { Input } from "../ui/input";

const CustomInput = ({
  htmlFor,
  label,
  inputId,
  placeholderText,
  value,
  onChange,
}: CustomInputProps) => {
  return (
    <div className="flex flex-col gap-2">
      <Label
        htmlFor={htmlFor}
        className="text-[16px] leading-[22px] font-inter font-semibold text-heading-color"
      >
        {label}
      </Label>
      <Input
        id={inputId}
        placeholder={placeholderText}
        className="h-[50px] rounded-[10px] focus:outline-2 border-border dark:placeholder:text-paragraph-color focus-visible:ring-secondary-theme bg-transparent text-[14px] placeholder:text-[14px] focus-visible:!ring-offset-0 duration-200 transition-all"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default CustomInput;

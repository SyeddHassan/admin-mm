import React from "react";

import { CustomInputProps } from "@/interfaces/common-components-interface";

import { Label } from "../ui/label";
import { Input } from "../ui/input";

const CustomInput = ({
  showCount = false,
  htmlFor,
  label,
  charCount,
  inputId,
  placeholderText,
  value,
  onChange,
}: CustomInputProps) => {
  return (
    <div className="flex flex-col gap-2">
      {showCount ? (
        <div className="w-full flex items-center justify-between">
          <Label
            htmlFor={htmlFor}
            className="text-[16px] leading-[22px] font-inter font-semibold text-heading-color"
          >
            {label}
          </Label>
          <p className="text-[14px] leading-[24px]">{charCount} characters</p>
        </div>
      ) : (
        <Label
          htmlFor={htmlFor}
          className="text-[16px] leading-[22px] font-inter font-semibold text-heading-color"
        >
          {label}
        </Label>
      )}

      <Input
        id={inputId}
        placeholder={placeholderText}
        className="h-[50px] rounded-[10px] focus:outline-2 border-border dark:placeholder:text-paragraph-color focus-visible:ring-secondary-theme bg-transparent text-[14px] placeholder:text-[14px] focus-visible:!ring-offset-0 duration-200 transition-all font-inter"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default CustomInput;

"use client";

import React, { useState, useEffect, useRef } from "react";

import { MultiSelectDropdownProps } from "@/interfaces/common-components-interface";

import { IoClose } from "react-icons/io5";
import { ChevronDown } from "lucide-react";
import { Label } from "../ui/label";

const CustomMultiSelectDropdown = ({
  label,
  options,
  selectedItems,
  setSelectedItems,
  dropDownClassName,
}: MultiSelectDropdownProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleSelection = (option: string) => {
    if (selectedItems.includes(option)) {
      setSelectedItems(selectedItems.filter((item) => item !== option));
    } else {
      setSelectedItems([...selectedItems, option]);
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex flex-col gap-2">
      <Label className="text-[16px] leading-[22px] font-inter font-semibold text-heading-color">
        {label}
      </Label>
      <div className="relative" ref={dropdownRef}>
        <div
          className="h-[50px] rounded-[10px] border border-border bg-transparent text-[14px] leading-[24px] flex items-center justify-between px-3 cursor-pointer transition-all"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <div className="flex flex-wrap gap-2">
            {selectedItems.length > 0 ? (
              selectedItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-black/10 dark:bg-white/10 text-heading-color font-inter py-1 px-2 flex items-center gap-2 rounded-md"
                >
                  {item}
                  <IoClose
                    className="text-red-500 hover:text-red-600 cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleSelection(item);
                    }}
                  />
                </div>
              ))
            ) : (
              <span className="text-[14px] font-inter">Select an Option</span>
            )}
          </div>
          <ChevronDown />
        </div>

        {/* DROPDOWN OPTIONS */}
        {isDropdownOpen && (
          <div className={`absolute top-[110%] left-0 w-full border border-border rounded-[10px] bg-white dark:bg-background-color py-2 shadow-md z-10 ${dropDownClassName}`}>
            {options.map((option, index) => (
              <div
                key={index}
                onClick={() => toggleSelection(option)}
                className={`px-4 py-4 cursor-pointer text-[14px] font-inter hover:bg-general-hover ${
                  selectedItems.includes(option)
                    ? "text-secondary-theme"
                    : ""
                }`}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomMultiSelectDropdown;

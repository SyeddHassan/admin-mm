import { ComponentType } from "react";
import { DateRange } from "react-day-picker";

// FILTERS BUTTONS
export interface FilterButtons01Props {
  selectedTab: string;
  setSelectedTab: (tab: string) => void;
}
export interface FilterButtons02Props {
  selectedTab: string;
  setSelectedTab: (tab: string) => void;
  filteredInput: string;
  setFilteredInput: (input: string) => void;
}
export interface FilterButtons03Props {
  selectedTab: string;
  setSelectedTab: (tab: string) => void;
}
export interface FilterButtons04Props {
  selectedTab: string;
  setSelectedTab: (tab: string) => void;
}
export interface FilterButtons05Props {
  selectedTab: string;
  setSelectedTab: (tab: string) => void;
  filteredInput: string;
  setFilteredInput: (input: string) => void;
}

// LOADING PROPS
export interface LoadingProps {
  containerClassName?: string;
  Icon: ComponentType<{ className?: string }>;
  iconClassName?: string;
}

// SECTIONAL HEADING
export interface SectionalHeadingProps {
  title: string;
  showNewCampaign?: boolean;
  className?: string;
  titleClassName?: string;
  actionClassName?: string;
}

// DATE PICKER
export interface DatePickerProps {
  date: Date | undefined;
  setDate: (date: Date | undefined) => void;
}
export interface DateRangePickerProps {
  className?: string;
  date: DateRange | undefined;
  setDate: React.Dispatch<React.SetStateAction<DateRange | undefined>>;
}

// CUSTOMS
export interface CustomInputProps {
  showCount?: boolean;
  htmlFor: string;
  label: string;
  charCount?: number;
  inputId: string;
  placeholderText?: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export interface MultiSelectDropdownProps {
  label: string;
  options: string[];
  selectedItems: string[];
  setSelectedItems: (items: string[]) => void;
  dropDownClassName?: string;
}

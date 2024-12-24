import { ComponentType } from "react";
import { DateRange } from "react-day-picker";

// FILTERS BUTTONS
export interface FilterButtons01Props {
  selectedTab: string;
  setSelectedTab: (tab: string) => void;
}
export interface FilterButtons02Props {
  isCampaign?: boolean;
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

// CUSTOM INPUT
export interface CustomInputProps {
  htmlFor: string;
  label: string;
  inputId: string;
  placeholderText?: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

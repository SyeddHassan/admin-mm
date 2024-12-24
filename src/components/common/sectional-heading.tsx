import React from "react";

import { SectionalHeadingProps } from "@/interfaces/common-components-interface";

import { cn } from "@/lib/utils";

import { Separator } from "../ui/separator";
import NewCampaignButton from "../partials/advertisment-management/new-campaign-button";

const SectionalHeading: React.FC<SectionalHeadingProps> = ({
  title,
  showNewCampaign = false,
  className,
  titleClassName,
  actionClassName,
}) => {
  return (
    <div className={cn("w-full flex flex-col gap-4", className)}>
      <div className="flex lg:flex-row flex-col max-lg:gap-4 lg:items-center lg:justify-between">
        <h1
          className={cn(
            "font-inter lg:text-[32px] lg:leading-[40px] md:text-[26px] md:leading-[34px] text-[20px] leading-[28px] tracking-wide text-heading-color font-semibold",
            titleClassName
          )}
        >
          {title}
        </h1>

        <div
          className={cn(
            "lg:w-auto w-full flex lg:justify-end",
            actionClassName
          )}
        >
          {showNewCampaign && <NewCampaignButton />}
        </div>
      </div>

      <Separator />
    </div>
  );
};

export default SectionalHeading;

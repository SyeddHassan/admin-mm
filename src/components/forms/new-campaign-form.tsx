"use client";

import React from "react";
import Image from "next/image";

import { campaignDisplayOptions } from "@/constants/advertisement-management-system-page-components-data";

import CustomInput from "../common/custom-input";
import CustomMultiSelectDropdown from "../common/custom-multi-select-dropdown";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import AdvertisementManagementSystemNewCampaignImg01 from "../../../public/images/advertisement-management-system-new-campaign-img-01.png";
import AdvertisementManagementSystemNewCampaignImg02 from "../../../public/images/advertisement-management-system-new-campaign-img-02.png";
import { MdPermMedia } from "react-icons/md";
import { Upload } from "lucide-react";

interface NewCampaignFormProps {
  selectedTab: string;
  setSelectedTab: React.Dispatch<React.SetStateAction<string>>;
  charCount: number;
  setCharCount: React.Dispatch<React.SetStateAction<number>>;
  clientName: string;
  setClientName: React.Dispatch<React.SetStateAction<string>>;
  campaignTitle: string;
  setCampaignTitle: React.Dispatch<React.SetStateAction<string>>;
  linkOnClick: string;
  setLinkOnClick: React.Dispatch<React.SetStateAction<string>>;
  selectedCampaignDisplay: string[];
  setSelectedCampaignDisplay: React.Dispatch<React.SetStateAction<string[]>>;
}

const NewCampaignForm = ({
  selectedTab,
  setSelectedTab,
  charCount,
  setCharCount,
  clientName,
  setClientName,
  campaignTitle,
  setCampaignTitle,
  linkOnClick,
  setLinkOnClick,
  selectedCampaignDisplay,
  setSelectedCampaignDisplay,
}: NewCampaignFormProps) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const charCount = e.target.value.length;
    setCharCount(charCount);
  };

  return (
    <div className="overflow-y-auto md:h-[calc(100%-160px)] h-[calc(100%-190px)] md:px-4 px-2 flex flex-col gap-8 py-4">
      {/* CAMPAIGN TYPE SECTION */}
      <div className="space-y-8">
        <h1 className="text-[24px] leading-[30px] font-inter font-bold text-heading-color">
          Campaign Type
        </h1>

        <div className="w-full gap-8 grid md:grid-cols-2 grid-cols-1">
          <div className="col-span-1 flex flex-col items-center gap-4 w-full">
            <div
              onClick={() => setSelectedTab("textCampaign")}
              className={`h-[134px] w-full rounded-[10px] bg-background-color dark:bg-primary-theme flex-center p-4 cursor-pointer ${
                selectedTab === "textCampaign"
                  ? "!ring-secondary-theme ring-2"
                  : "hover:bg-general-hover"
              }`}
            >
              <Image
                src={AdvertisementManagementSystemNewCampaignImg01}
                className="w-[300px] h-[100px] rounded-sm"
                alt="Advertisement Management System New Campaign Type"
              />
            </div>

            <h1
              className={`text-[16px] leading-[22px] font-inter font-semibold  ${
                selectedTab === "textCampaign"
                  ? "text-secondary-theme"
                  : "text-heading-color"
              }`}
            >
              Text Campaign
            </h1>
          </div>

          <div className="col-span-1 flex flex-col items-center gap-4 w-full">
            <div
              className={`h-[134px] w-full rounded-[10px] bg-background-color  dark:bg-primary-theme flex-center p-4 cursor-pointer ${
                selectedTab === "multiMedia"
                  ? "!ring-secondary-theme ring-2"
                  : "hover:bg-general-hover"
              }`}
              onClick={() => setSelectedTab("multiMedia")}
            >
              <Image
                src={AdvertisementManagementSystemNewCampaignImg02}
                className="w-[140px] h-[100px] rounded-sm"
                alt="Advertisement Management System New Campaign Type"
              />
            </div>

            <h1
              className={`text-[16px] leading-[22px] font-inter font-semibold  ${
                selectedTab === "multiMedia"
                  ? "text-secondary-theme"
                  : "text-heading-color"
              }`}
            >
              Multimedia Campaign
            </h1>
          </div>
        </div>
      </div>

      <Separator />

      <div className="w-full flex flex-col gap-8">
        <h1 className="text-[24px] leading-[30px] font-inter font-bold text-heading-color">
          Campaign Information
        </h1>

        {/* CLIENT NAME FIELD */}
        <CustomInput
          htmlFor="campaign-name"
          label="Client Name"
          inputId="campaign-name"
          placeholderText="eg: Twitch"
          value={clientName}
          onChange={(e) => setClientName(e.target.value)}
        />

        {/* CAMPAIGN TITLE FIELD */}
        <CustomInput
          htmlFor="campaign-title"
          label="Campaign Title"
          inputId="campaign-title"
          placeholderText="eg: Big Sale on at Flight..."
          value={campaignTitle}
          showCount={true}
          charCount={charCount}
          onChange={(e) => {
            setCampaignTitle(e.target.value);
            handleInputChange(e);
          }}
        />

        {/* MULTI MEDIA CAMPAIGN UPLOAD FIELD */}
        {selectedTab === "multiMedia" && (
          <div className="flex flex-col gap-2">
            <Label
              htmlFor="campaign-multiMedia"
              className="text-[16px] leading-[22px] font-inter font-semibold text-heading-color"
            >
              Campaign Multimedia
            </Label>
            <div
              id="campaign-multiMedia"
              className={`w-full rounded-[10px] bg-background-color dark:bg-primary-theme flex-center flex-col py-12 gap-4 border-border border hover:bg-general-hover cursor-pointer`}
            >
              <MdPermMedia className="text-[42px]" />
              <Button className="inline-flex items-center text-[14px] font-inter justify-center rounded-full bg-secondary-theme px-4 py-2 text-sm font-medium text-theme-heading-color hover:bg-secondary-theme-hover shadow-button-shadow">
                <Upload className="h-4 w-4" />
                Upload Multimedia
              </Button>
              <p className="lg:text-[16px] md:text-[14px] text-[12px] lg:leading-[24px] md:leading-[22px] leading-[20px] text-center px-4 font-inter">
                jpg/png/gif (Max 500KB) mp4 @720p (Max 1MB) / File Proportions:
                198x164
              </p>
            </div>
          </div>
        )}

        {/* LINK ON CLICK FIELD */}
        <CustomInput
          htmlFor="campaign-link"
          label="Link on Click"
          inputId="campaign-link"
          placeholderText="eg: http://twitch.tv"
          value={linkOnClick}
          onChange={(e) => setLinkOnClick(e.target.value)}
        />

        <div className="w-full grid md:grid-cols-2 md:gap-4 gap-8">
          {/* CAMPAIGN DISPLAY FIELD */}
          <CustomMultiSelectDropdown
            label="Display"
            options={campaignDisplayOptions}
            selectedItems={selectedCampaignDisplay}
            setSelectedItems={setSelectedCampaignDisplay}
          />
        </div>
      </div>
    </div>
  );
};

export default NewCampaignForm;

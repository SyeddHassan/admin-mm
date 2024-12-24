"use client";

import React, { useState } from "react";

import { Button } from "../../ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import NewCampaignForm from "../../forms/new-campaign-form";

const NewCampaignButton = () => {
  const [selectedTab, setSelectedTab] = useState("textCampaign");
  const [charCount, setCharCount] = useState(0);

  const [clientName, setClientName] = useState("");
  const [campaignTitle, setCampaignTitle] = useState("");
  const [linkOnClick, setLinkOnClick] = useState("");

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="sm:w-[183px] w-full h-[45px] rounded-[200px] !shadow-button-shadow bg-secondary-theme hover:bg-secondary-theme-hover text-theme-heading-color font-inter flex-center text-[14px] leading-[18px]">
          + New Campaign
        </Button>
      </DialogTrigger>

      <DialogContent
        aria-describedby={undefined}
        className="max-w-[1536px] w-[90%] h-[90%] bg-white border-border dark:bg-background-color flex flex-col justify-between rounded-[6px]"
      >
        <DialogHeader className="md:h-[80px] h-[60px] flex flex-col justify-center gap-2">
          <DialogTitle className="md:text-[44px] text-[28px] text-secondary-theme font-inter font-bold md:leading-[50px] leading-[34px] text-start md:px-4">
            New Campaign
          </DialogTitle>
          <Separator className="h-[2px]" />
        </DialogHeader>

        <NewCampaignForm
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
          charCount={charCount}
          setCharCount={setCharCount}
          clientName={clientName}
          setClientName={setClientName}
          campaignTitle={campaignTitle}
          setCampaignTitle={setCampaignTitle}
          linkOnClick={linkOnClick}
          setLinkOnClick={setLinkOnClick}
        />

        <DialogFooter className="md:h-[80px] h-[130px] flex !flex-col !justify-center gap-4">
          <Separator className="h-[2px]" />
          <div className="md:px-4 flex md:justify-between md:flex-row flex-col max-md:gap-4">
            <p className="font-inter text-[12px] font-semibold">
              Campaign ends on: 2024, Jan 14
            </p>

            <div className="flex items-center max-md:w-full gap-2">
              <Button className="bg-background-color md:rounded-[200px] md:h-[56px] h-[46px] md:w-[183px] w-full font-inter font-medium text-[16px] text-heading-color border-border border hover:bg-general-hover">
                Cancel
              </Button>
              <Button className="bg-secondary-theme md:rounded-[200px] md:h-[56px] h-[46px] md:w-[183px] w-full font-inter font-medium text-[16px] text-theme-heading-color border-none hover:bg-secondary-theme-hover">
                Save
              </Button>
            </div>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default NewCampaignButton;

import React from "react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { HiMiniPencil } from "react-icons/hi2";
import { FaTrash } from "react-icons/fa";
import { IoMdRefresh } from "react-icons/io";
import { RiBarChartBoxFill } from "react-icons/ri";

interface props {
  status: string;
}

const AdvertisementCampaignsTableManageButtons = ({ status }: props) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {/* EDIT OPTION */}
      <div className="w-[30px] h-[30px] rounded-lg hover:bg-general-hover cursor-pointer flex-center">
        {status === "expired" ? (
          <IoMdRefresh size={20} className="text-green-500" />
        ) : (
          <HiMiniPencil size={16} className="text-heading-color" />
        )}
      </div>

      {/* DELETED OPTION */}
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <div className="w-[30px] h-[30px] rounded-lg hover:bg-general-hover cursor-pointer flex-center">
            <FaTrash size={16} className="text-red-500" />
          </div>
        </AlertDialogTrigger>
        <AlertDialogContent className="bg-white dark:bg-background-color border-border">
          <AlertDialogHeader>
            <AlertDialogTitle className="font-inter text-heading-color font-bold">
              Are you absolutely sure?
            </AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently deleted this
              advertisment and remove related data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="max-md:mt-4">
            <AlertDialogCancel className="text-[14px] text-heading-color font-inter hover:bg-general-hover border-border">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction className="text-[14px] bg-secondary-theme text-theme-heading-color font-inter hover:bg-secondary-theme-hover">
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* STATS OPTION */}
      <div className="w-[30px] h-[30px] rounded-lg hover:bg-general-hover cursor-pointer flex-center">
        <RiBarChartBoxFill size={20} className="text-black dark:text-white" />
      </div>
    </div>
  );
};

export default AdvertisementCampaignsTableManageButtons;

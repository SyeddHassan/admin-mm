import React from "react";

import SectionalHeading from "@/components/common/sectional-heading";
import RealTimeFileTransferCard from "@/sections/file-transfer/real-time-file-transfer-card";
import FileTypesCard from "@/sections/file-transfer/file-types-card";
import FileStatusCard from "@/sections/file-transfer/file-status-card";
import FilePeakTimeCard from "@/sections/file-transfer/file-peak-time-card";
import FileMomentServerCapacityCard from "@/sections/file-transfer/file-moment-server-capacity-card";

const FileTransferPage = () => {
  return (
    <main className="page-layout-standard section-margin-standard">
      <SectionalHeading title="File Transfer Overview" />

      <RealTimeFileTransferCard />

      <div className="w-full grid lg:grid-cols-5 grid-cols-1 md:gap-4 gap-8">
        <FileTypesCard />
        <FilePeakTimeCard />
      </div>

      <div className="w-full grid lg:grid-cols-2 grid-cols-1 md:gap-4 gap-8">
        <FileStatusCard />
        <FileMomentServerCapacityCard />
      </div>
    </main>
  );
}; 

export default FileTransferPage;

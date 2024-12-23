import React from "react";

import SectionalHeading from "@/components/common/sectional-heading";
import UsageFrequencyCard from "@/sections/project-mode/usage-frequency-card";
import TranscriptDownloadCard from "@/sections/project-mode/transcript-download-card";

const ProjectModePage = () => {
  return (
    <main className="page-layout-standard section-margin-standard">
      <SectionalHeading title="Project Mode (ChatGPT)" />

      <div className="w-full grid xl:grid-cols-3 grid-cols-1 xl:gap-4 gap-8">
        <UsageFrequencyCard />
        <TranscriptDownloadCard />
      </div>
    </main>
  );
};

export default ProjectModePage;

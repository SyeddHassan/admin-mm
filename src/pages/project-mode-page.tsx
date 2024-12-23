import React from "react";

import SectionalHeading from "@/components/common/sectional-heading";
import UsageFrequencyCard from "@/sections/project-mode/usage-frequency-card";
import TranscriptDownloadCard from "@/sections/project-mode/transcript-download-card";
import AvgSessionDurationProjectModeCard from "@/sections/project-mode/avg-session-duration-project-mode-card";
import ProjectModeDevicesCard from "@/sections/project-mode/project-mode-devices-card";
import ProjectModeOperatingSystemsCard from "@/sections/project-mode/project-mode-operating-systems-card";
import ProjectModeActivationsCard from "@/sections/project-mode/project-mode-activations-card";
import ChatGPTPromptsCard from "@/sections/project-mode/chatgpt-prompts-card";
import ChatGPTDailyPeakTimeCard from "@/sections/project-mode/chatgpt-daily-peak-time-card";

const ProjectModePage = () => {
  return (
    <main className="page-layout-standard section-margin-standard">
      <SectionalHeading title="Project Mode (ChatGPT)" />

      <div className="w-full grid xl:grid-cols-3 grid-cols-1 xl:gap-4 gap-8">
        <UsageFrequencyCard />
        <TranscriptDownloadCard />
      </div>

      <div className="w-full grid md:grid-cols-4 grid-cols-1 xl:gap-4 gap-8">
        <AvgSessionDurationProjectModeCard />
        <ProjectModeDevicesCard />
        <ProjectModeOperatingSystemsCard />
      </div>

      <ProjectModeActivationsCard />

      <div className="w-full grid xl:grid-cols-3 md:grid-cols-4 grid-cols-1 md:gap-4 gap-8">
        <ChatGPTPromptsCard />
        <ChatGPTDailyPeakTimeCard />
      </div>
    </main>
  );
};

export default ProjectModePage;

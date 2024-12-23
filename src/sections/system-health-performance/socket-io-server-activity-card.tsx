import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SocketIOServerActivityCard = () => {
  return (
    <Card className="!standard-card-styling col-span-1">
      <CardHeader className="py-6 border-b border-border">
        <CardTitle className="font-inter font-medium text-heading-color text-[16px] leading-[18px]">
          Socket IO Server Activity
        </CardTitle>
      </CardHeader>

      {/* SOCKET IO SERVER ACTIVITY FREQUENCY CHART */}
      <CardContent className="h-[550px]"></CardContent>
    </Card>
  );
};

export default SocketIOServerActivityCard;

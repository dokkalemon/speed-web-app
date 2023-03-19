import { Tab, Tabs } from "@mui/material";
import { useState } from "react";

const Results = ({
  sites,
}: {
  sites: string[];
}) => {
  //state
  const [activeTab, setActiveTab] =
    useState<number>(0);

  return (
    <Tabs
      value={activeTab}
      variant="scrollable"
      onChange={(_, v) => setActiveTab(v)}
    >
      {sites?.map((el, index) => (
        <Tab
          label={el}
          sx={{ textTransform: "lowercase" }}
        />
      ))}
    </Tabs>
  );
};

export { Results };

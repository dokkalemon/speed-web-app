import { Typography } from "@mui/material";
import { useState } from "react";
import { Panel, ResultsContainer, Tab, Tabs } from "./Result.style";

import { reduceText } from "utils/string";
import { IResultsProps } from "./Result.types";

const Results = ({ sites, deleteSite }: IResultsProps) => {
  //state
  const [activeTab, setActiveTab] = useState<number>(0);

  //renders
  const renderTab = (site: string, index: number) => {
    return (
      <Tab active={index === activeTab} key={`tab${index}`} onClick={() => setActiveTab(index)}>
        <Typography>{reduceText(site)}</Typography>
      </Tab>
    );
  };

  return (
    <ResultsContainer>
      {sites.length > 0 ? (
        <>
          <Tabs>{sites.map((site: string, index: number) => renderTab(site, index))}</Tabs>
          <Panel></Panel>
        </>
      ) : (
        <Typography variant="body1" sx={{ textAlign: "center", width: "100%" }}>
          Ancora non è stata fatta nessuna richiesta
        </Typography>
      )}
    </ResultsContainer>
  );
};

export { Results };

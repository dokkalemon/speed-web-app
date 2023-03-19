import { Typography } from "@mui/material";
import { useState } from "react";
import { Panel, ResultsContainer, Tab, Tabs } from "./Result.style";
import { reduceText } from "utils/string";
import { useContext } from "react";
import { SearchSiteContext } from "contexts/SearchContext";

const Results = () => {
  //context
  const { domains, activeSite, setActiveSite } = useContext(SearchSiteContext);

  //renders
  const renderTab = (site: string, index: number) => {
    return (
      <Tab active={index === activeSite} key={`tab${index}`} onClick={() => setActiveSite(index)}>
        <Typography>{reduceText(site)}</Typography>
      </Tab>
    );
  };

  return (
    <ResultsContainer>
      {domains.length > 0 ? (
        <>
          <Tabs>{domains.map((site: string, index: number) => renderTab(site, index))}</Tabs>
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

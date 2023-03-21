import { Typography } from "@mui/material";
import { Panel, ResultsContainer, Tab, Tabs } from "./Results.style";
import { reduceText } from "utils/string";
import { useContext } from "react";
import { SearchSiteContext } from "contexts/SearchContext";
import { useLoading } from "hooks";
import { Result } from "../Result/Result";
import { IDomainProps } from "types/domains";
import { colorResponse } from "constants/references";

const Results = () => {
  //context
  const { domains, activeSite, setActiveSite } = useContext(SearchSiteContext);
  const { loading } = useLoading();
  //renders
  const renderTab = (site: IDomainProps, index: number) => {
    console.log(colorResponse[site.results]);
    return (
      <Tab active={index === activeSite} key={`tab${index}`} onClick={() => setActiveSite(index)}>
        <Typography sx={{ color: colorResponse[site.status as number] || "#ffffff" }}>
          {reduceText(site.domain)}
        </Typography>
      </Tab>
    );
  };
  return (
    <ResultsContainer>
      {domains.length > 0 ? (
        <>
          <Tabs>{domains.map((site: IDomainProps, index: number) => renderTab(site, index))}</Tabs>
          <Panel>
            <Result loading={loading === activeSite + 1} activeSite={activeSite} />
          </Panel>
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

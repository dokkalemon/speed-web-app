import { Typography } from "@mui/material";
import { Panel, ResultsContainer, Tab, Tabs } from "./Result.style";
import { reduceText } from "utils/string";
import { useContext } from "react";
import { SearchSiteContext } from "contexts/SearchContext";
import { useLoading } from "hooks";
import { Result } from "components";

const Results = () => {
  //context
  const { domains, activeSite, setActiveSite } = useContext(SearchSiteContext);
  const { loading } = useLoading();
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
          <Panel>
            <Result loading={loading === activeSite + 1} />
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

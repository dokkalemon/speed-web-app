import { Typography } from "@mui/material";
import { Panel, ResultsContainer, Tab, Tabs } from "./Results.style";
import { reduceText } from "utils/string";
import { useContext, useEffect, useState } from "react";
import { Result } from "../Result/Result";
import { DomainsContext } from "contexts/DomainsContext";
import { IDomainProps } from "types/domains";

const Results = () => {
  //context
  const { domains, statistics } = useContext(DomainsContext);

  //state
  const [activeSite, setActiveSite] = useState<string>("");
  const [loadingState, setLoadingState] = useState<boolean>(false);
  const [siteStatistics, setSiteStatistics] = useState<IDomainProps | null>(null);
  useEffect(() => {
    const site = statistics.find((el) => el.domain === activeSite);

    site ? setLoadingState(!Boolean(site.status)) : setLoadingState(true);
  }, [activeSite, statistics]);

  useEffect(() => {
    setActiveSite(domains[domains.length - 1]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [domains.length]);

  useEffect(() => {
    const statisticsFound = statistics.find((el) => el.domain === activeSite);
    setSiteStatistics(statisticsFound as IDomainProps);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeSite, loadingState]);
  //renders
  const renderTab = (site: string, index: number) => {
    return (
      <Tab active={activeSite === site} key={`tab${index}`} onClick={() => setActiveSite(site)}>
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
            <Result loading={loadingState} activeSite={siteStatistics as IDomainProps} />
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

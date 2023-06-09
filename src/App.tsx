import { GeneralLoading, Header, Modal, Wrapper } from "components";
import { FormEvent, useEffect, useState } from "react";
import { Results, TypingSite } from "sections";
import { addHttps } from "utils/controller";
import { useContext } from "react";
import { useTest } from "hooks";
import { DomainsContext } from "contexts/DomainsContext";
import { IDomainProps, IResultsProps } from "types/domains";
import { getPrimaryCategories, getPerformance, getWarningsAndSettings } from "utils/domain";
import useSessions from "hooks/api/useSessions";
import { Alert, Snackbar } from "@mui/material";
interface IModelProps {
  site: string | null;
  index: number;
}

function App() {
  //hooks
  const { getInsights } = useTest();
  const { getSessions, loading } = useSessions();

  //context
  const { domains, setDomains, statistics, setStatistics, setSnackbar, snackbar } =
    useContext(DomainsContext);

  //state
  const [modal, setModal] = useState<IModelProps>({ site: null, index: 0 });
  //function
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let site = e.currentTarget.elements.namedItem("site") as HTMLInputElement;
    const validUrl = addHttps(site.value);
    const testedUrl = domains.map((e) => e).indexOf(validUrl) + 1;
    if (testedUrl) return setModal({ site: validUrl, index: testedUrl });
    setDomains([...domains, validUrl]);
  };

  useEffect(() => {
    const fetchSessions = async () => {
      const response = await getSessions();
      setStatistics([...response]);
      const domains = response.map((el: IDomainProps) => el.domain);
      setDomains(domains);
    };
    fetchSessions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (domains.length === 0) return;

    const domain = domains[domains.length - 1];
    fetchDomain(domain);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [domains.length]);

  //functions
  const fetchDomain = async (domain: string) => {
    const response: any = await getInsights(domain);

    if (response && response.status === 200) {
      const results: IResultsProps = {
        primaryCategories: null,
        performance: null,
        warningsAndSettings: null,
      };
      results.primaryCategories = getPrimaryCategories(response.data);
      results.performance = getPerformance(response.data);
      results.warningsAndSettings = getWarningsAndSettings(response.data);
      const newDomain: IDomainProps = {
        domain,
        results: results,
        status: 200,
        id: domain.replace(/[//:.]/g, ""),
        saved: false,
      };
      setStatistics([...statistics, newDomain]);
    }
    if (!response || !response.status || response.status !== 200) {
      const newDomain: IDomainProps = {
        domain,
        results: null,
        status: 500,
        id: "",
        errorMessage: response.data.error.message,
        saved: false,
      };
      setStatistics([...statistics, newDomain]);
    }
  };

  return (
    <div className="App">
      {loading && <GeneralLoading />}
      <Snackbar
        open={snackbar.visible}
        autoHideDuration={6000}
        onClose={() => setSnackbar({ message: "", variant: "info", visible: false })}
        message={snackbar.message}
      >
        <Alert severity={snackbar.variant}>{snackbar.message}</Alert>
      </Snackbar>
      <Header />
      <Wrapper>
        <TypingSite handleSubmit={handleSubmit} />
        <Results />
        {modal.site ? (
          <Modal onClose={() => setModal({ site: null, index: 0 })} data={modal} />
        ) : null}
      </Wrapper>
    </div>
  );
}

export default App;

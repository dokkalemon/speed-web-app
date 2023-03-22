import { Header, Modal, Wrapper } from "components";
import { FormEvent, useEffect, useState } from "react";
import { Results, TypingSite } from "sections";
import { addHttps } from "utils/controller";
import { useContext } from "react";
import { useLoading, useTest } from "hooks";
import { DomainsContext } from "contexts/DomainsContext";
import { IDomainProps } from "types/domains";
interface IModelProps {
  site: string | null;
  index: number;
}

function App() {
  //hooks
  const { startLoading, stopLoading } = useLoading();
  const { getInsights } = useTest({ startLoading, stopLoading });
  //context
  const { domains, setDomains, statistics, setStatistics } = useContext(DomainsContext);

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
    if (domains.length === 0) return;

    const domain = domains[domains.length - 1];
    fetchDomain(domain);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [domains.length]);

  //functions
  const fetchDomain = async (domain: string) => {
    const response: any = await getInsights(domain);

    if (response && response.status === 200) {
      console.log(response);
      const newDomain: IDomainProps = { domain, results: response.data, status: 200 };
      setStatistics([...statistics, newDomain]);
    }
    if (!response || !response.status || response.status !== 200) {
      console.log(response);
      const newDomain: IDomainProps = {
        domain,
        results: null,
        status: 500,
        errorMessage: response.data.error.message,
      };
      setStatistics([...statistics, newDomain]);
    }
  };

  console.log("domains", statistics);
  console.log("domains", domains);

  return (
    <div className="App">
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

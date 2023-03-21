import { Header, Modal, Wrapper } from "components";
import { FormEvent, useState } from "react";
import { Results, TypingSite } from "sections";
import { addHttps } from "utils/controller";
import { useContext } from "react";
import { SearchSiteContext } from "contexts/SearchContext";
import { useLoading, useTest } from "hooks";

interface IModelProps {
  site: string | null;
  index: number;
}

function App() {
  //hooks
  const { startLoading, stopLoading } = useLoading();
  const { getInsights } = useTest({ startLoading, stopLoading });
  //context
  const { domains, addDomain, setActiveSite, updateDomain } = useContext(SearchSiteContext);

  //state
  const [modal, setModal] = useState<IModelProps>({ site: null, index: 0 });
  //function
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let site = e.currentTarget.elements.namedItem("site") as HTMLInputElement;
    const validUrl = addHttps(site.value);
    const testedUrl = domains.map((e) => e.domain).indexOf(validUrl) + 1;
    if (testedUrl) return setModal({ site: validUrl, index: testedUrl });
    addDomain(validUrl);
    setActiveSite(domains.length);
    /*     const response: any = await getInsights(validUrl, domains.length + 1); */

    updateDomain(validUrl, [], 200, "");

    /* if (response && response.status === 200) {
      console.log(response);
      updateDomain(validUrl, response.data, 200, "");
    }
    if (!response || !response.status || response.status !== 200) {
      console.log(response);
      updateDomain(validUrl, [], response.status, response.data.error.message);
    } */
  };

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

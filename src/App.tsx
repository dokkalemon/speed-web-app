import { Header, Modal, Wrapper } from "components";
import { FormEvent, useState } from "react";
import { Results, TypingSite } from "sections";
import { addHttps } from "utils/controller";
import { useContext } from "react";
import { SearchSiteContext } from "contexts/SearchContext";
import { useLoading, useTest } from "hooks";
function App() {
  //hooks
  const { startLoading, stopLoading } = useLoading();
  const { getInsights } = useTest({ startLoading, stopLoading });
  //context
  const { domains, addDomain, setActiveSite } = useContext(SearchSiteContext);

  //state
  const [modal, setModal] = useState<number>(0);
  //function
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let site = e.currentTarget.elements.namedItem("site") as HTMLInputElement;

    const validUrl = addHttps(site.value);
    const testedUrl = domains.map((e) => e.domain).indexOf(validUrl) + 1;

    if (testedUrl) return setModal(testedUrl);

    addDomain(validUrl);
    setActiveSite(domains.length);
    const response = await getInsights(validUrl, domains.length + 1);
    console.log(response);
  };

  return (
    <div className="App">
      <Header />
      <Wrapper>
        <TypingSite handleSubmit={handleSubmit} />
        <Results />
        {modal ? <Modal onClose={() => setModal(0)} position={modal} /> : null}
      </Wrapper>
    </div>
  );
}

export default App;

import { Header, Wrapper } from "components";
import { FormEvent } from "react";
import { Results, TypingSite } from "sections";
import { addHttps } from "utils/controller";
import { useContext } from "react";
import { SearchSiteContext } from "contexts/SearchContext";
import { useTest } from "hooks";
function App() {
  //hooks
  const { getInsights } = useTest();

  //context
  const { addDomain } = useContext(SearchSiteContext);

  //function
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let site = e.currentTarget.elements.namedItem("site") as HTMLInputElement;
    const validUrl = addHttps(site.value);
    addDomain(validUrl);
    const response = await getInsights(validUrl);
    console.log(response);
  };

  return (
    <div className="App">
      <Header />
      <Wrapper>
        <TypingSite handleSubmit={handleSubmit} />
        <Results />
      </Wrapper>
    </div>
  );
}

export default App;

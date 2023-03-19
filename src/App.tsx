import { Header, Wrapper } from "components";
import { FormEvent, useState } from "react";
import { Results, TypingSite } from "sections";

function App() {
  //state
  const [sites, setSites] = useState<string[]>(
    []
  );

  //function
  const handleSubmit = async (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    const site =
      e.currentTarget.elements.namedItem(
        "site"
      ) as HTMLInputElement;

    const checkSite = sites.find(
      (el) => el === site.value
    ); //TODO: edit el with real parameter

    if (checkSite)
      return alert("sito già presente"); //TODO: Create custom message element

    /* const response = await fetch(
      "https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=http://www.hotelbianchi.com"
    ); */
    setSites([...sites, site.value]);
  };

  return (
    <div className="App">
      <Header />
      <Wrapper>
        <TypingSite handleSubmit={handleSubmit} />
        <Results sites={sites} />
      </Wrapper>
    </div>
  );
}

export default App;

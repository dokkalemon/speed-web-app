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

    const response = await fetch(
      "https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=www.hotelbianchi.com"
    );
    console.log(response);
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

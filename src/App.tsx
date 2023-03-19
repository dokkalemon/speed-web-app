import { Header, Wrapper } from "components";
import { FormEvent } from "react";
import { TypingSite } from "sections";

function App() {
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
      </Wrapper>
    </div>
  );
}

export default App;

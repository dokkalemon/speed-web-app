import { Header, Wrapper } from "components";
import { FormEvent } from "react";
import { TypingSite } from "sections";

function App() {
  //function
  const handleSubmit = (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    const site =
      e.currentTarget.elements.namedItem(
        "site"
      ) as HTMLInputElement;

    console.log(site.value);
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

import { Typography } from "@mui/material";
import { Header, Wrapper } from "components";
import { TypingSite } from "sections";

function App() {
  return (
    <div className="App">
      <Header />
      <Wrapper>
        <Typography
          variant="h4"
          color="grey.100"
          sx={{
            textAlign: "center",
            marginTop: "60px",
          }}
        >
          Inserisci un URL per testare il tempo di
          caricamento della pagina.
        </Typography>
        <TypingSite />
      </Wrapper>
    </div>
  );
}

export default App;

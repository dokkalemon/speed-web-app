import { Button, Stack, TextField, Typography } from "@mui/material";
import { useTest } from "hooks";
import { KeyboardEvent, useState } from "react";
import { urlRegex } from "utils/controller";

import { TypingSiteContainer } from "./TypingSite.style";
import { ITypingSiteProps } from "./TypingSite.types";

const TypingSite = ({ handleSubmit }: ITypingSiteProps) => {
  const { loading } = useTest();

  //state
  const [isValidSite, setIsValidSite] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  //function
  const handleKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
    const inputValue = (e.target as HTMLInputElement).value;
    setIsValidSite(urlRegex.test(inputValue));

    setError(inputValue.length > 8 ? !urlRegex.test(inputValue) : false);
  };

  return (
    <>
      <Typography
        variant="h4"
        color="grey.100"
        sx={{
          textAlign: "center",
          marginTop: "60px",
        }}
      >
        Inserisci un URL per testare il tempo di caricamento della pagina.
      </Typography>
      <Stack flexDirection="row" gap="10px" justifyContent="center">
        <TypingSiteContainer onSubmit={handleSubmit}>
          <Stack sx={{ width: "100%" }} gap="5px">
            <TextField
              fullWidth
              error={error}
              disabled={loading}
              name="site"
              onKeyUp={handleKeyUp}
              helperText={
                error ? (
                  <Typography variant="caption" color="error">
                    Url non valido
                  </Typography>
                ) : (
                  ""
                )
              }
              label="Inserisci l'url del sito che vuoi analizzare"
              placeholder="https://mysite.com o http://mysite.com"
            />
          </Stack>
          <Button
            variant="contained"
            color="secondary"
            sx={{ height: "55px" }}
            size="large"
            type="submit"
            disabled={!isValidSite || loading}
          >
            START
          </Button>
        </TypingSiteContainer>
      </Stack>
    </>
  );
};

export { TypingSite };

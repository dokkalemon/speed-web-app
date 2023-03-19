import { Button, Stack, TextField, Typography } from "@mui/material";
import { useLoading } from "hooks";
import { KeyboardEvent, useState } from "react";
import { urlRegex } from "utils/controller";

import { TypingSiteContainer } from "./TypingSite.style";
import { ITypingSiteProps } from "./TypingSite.types";

const TypingSite = ({ handleSubmit }: ITypingSiteProps) => {
  const { loading } = useLoading();

  //state
  const [isValidSite, setIsValidSite] = useState<boolean>(false);

  //function
  const handleKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
    const inputValue = (e.target as HTMLInputElement).value;

    setIsValidSite(urlRegex.test(inputValue));
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
              disabled={loading !== 0}
              name="site"
              onKeyUp={handleKeyUp}
              label="Inserisci l'url del sito che vuoi analizzare"
              placeholder="https://mysite.com o www.mysite.com"
            />
          </Stack>
          <Button
            variant="contained"
            color="secondary"
            sx={{ height: "55px" }}
            size="large"
            type="submit"
            disabled={!isValidSite || loading > 0}
          >
            START
          </Button>
        </TypingSiteContainer>
      </Stack>
    </>
  );
};

export { TypingSite };

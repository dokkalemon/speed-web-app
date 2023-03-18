import {
  Button,
  Stack,
  TextField,
} from "@mui/material";
import {
  FormEvent,
  KeyboardEvent,
  useState,
} from "react";
import { urlRegex } from "utils/controller";

import { TypingSiteContainer } from "./TypingSite.style";
const TypingSite = () => {
  //state
  const [isValidSite, setIsValidSite] =
    useState<boolean>(false);

  //function
  const handleKeyUp = (
    e: KeyboardEvent<HTMLDivElement>
  ) => {
    const inputValue = (
      e.target as HTMLInputElement
    ).value;
    if (inputValue.length > 5) {
      setIsValidSite(urlRegex.test(inputValue));
    } else {
      setIsValidSite(false);
    }
  };

  const handleSubmit = (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
  };
  return (
    <Stack
      flexDirection="row"
      gap="10px"
      justifyContent="center"
    >
      <TypingSiteContainer
        onSubmit={handleSubmit}
      >
        <Stack sx={{ width: "100%" }} gap="5px">
          <TextField
            fullWidth
            name="site"
            onKeyUp={handleKeyUp}
            label="Inserisci l'url del sito che vuoi analizzare"
            placeholder="https://mysite.com o www.mysite.com"
          />
        </Stack>
        <Button
          variant="contained"
          sx={{ height: "55px" }}
          size="large"
          type="submit"
          disabled={!isValidSite}
        >
          START
        </Button>
      </TypingSiteContainer>
    </Stack>
  );
};

export { TypingSite };

/* const handleSubmit = (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    const site =
      e.currentTarget.elements.namedItem(
        "site"
      ) as HTMLInputElement;
  }; */

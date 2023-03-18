import {
  Button,
  Stack,
  TextField,
} from "@mui/material";

import { TypingSiteContainer } from "./TypingSize.style";
const TypingSite = () => {
  return (
    <Stack
      flexDirection="row"
      gap="10px"
      justifyContent="center"
    >
      <TypingSiteContainer>
        <TextField
          fullWidth
          name="site"
          label="Inserisci l'url del sito web"
          placeholder="https://mysite.com o www.mysite.com"
        />
        <Button
          variant="contained"
          sx={{ height: "55px" }}
          size="large"
          type="submit"
        >
          START
        </Button>
      </TypingSiteContainer>
    </Stack>
  );
};

export { TypingSite };

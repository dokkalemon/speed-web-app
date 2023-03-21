import { Button, Stack, Typography } from "@mui/material";
import { ModalContainer, ModalWindow } from "./Modal.style";
import { IModalProps } from "./Modal.types";
import { useContext } from "react";
import { SearchSiteContext } from "contexts/SearchContext";
const Modal = ({ onClose, data }: IModalProps) => {
  const { setActiveSite } = useContext(SearchSiteContext);

  return (
    <ModalContainer>
      <ModalWindow>
        <Typography variant="body1" color="grey.100">
          Il Sito che cerchi di testare è già stato testato.
          <br /> È la {data.index}º voce dell'elenco di sinistra
        </Typography>
        <Stack sx={{ width: "100%" }} flexDirection="row" justifyContent="flex-end" gap="10px">
          <Button
            variant="contained"
            size="small"
            onClick={() => {
              setActiveSite(data.index);
              onClose();
            }}
          >
            Mostramelo
          </Button>
          <Button variant="contained" size="small" onClick={onClose}>
            Ho capito
          </Button>
        </Stack>
      </ModalWindow>
    </ModalContainer>
  );
};

export { Modal };

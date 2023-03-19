import { Button, Stack, Typography } from "@mui/material";
import { ModalContainer, ModalWindow } from "./Modal.style";
import { IModalProps } from "./Modal.types";

const Modal = ({ onClose, position }: IModalProps) => {
  return (
    <ModalContainer>
      <ModalWindow>
        <Typography variant="body1" color="grey.100">
          Il Sito che cerchi di testare è già stato testato.
          <br /> È la {position}º voce dell'elenco di sinistra
        </Typography>
        <Stack sx={{ width: "100%" }} alignItems="flex-end">
          <Button variant="contained" size="small" onClick={onClose}>
            Ho capito
          </Button>
        </Stack>
      </ModalWindow>
    </ModalContainer>
  );
};

export { Modal };

import { Typography } from "@mui/material";
import { LoadingCrono, LoadingHand } from "assets";
import { LoadingContainer, LogoContainer, LogoHandContainer } from "./Loading.style";

const Loading = () => {
  return (
    <LoadingContainer>
      <Typography variant="body1" color="grey.100" sx={{ fontWeight: "700" }}>
        Attendi qualche istante
      </Typography>
      <LogoContainer>
        <LoadingCrono />
        <LogoHandContainer>
          <LoadingHand
            style={{
              marginLeft: "-10px",
              marginTop: "-5px",
            }}
          />
        </LogoHandContainer>
      </LogoContainer>
    </LoadingContainer>
  );
};

export { Loading };

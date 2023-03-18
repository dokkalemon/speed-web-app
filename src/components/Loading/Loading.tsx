import {
  LoadingCrono,
  LoadingHand,
} from "assets";
import {
  LoadingContainer,
  LogoContainer,
  LogoHandContainer,
} from "./Loading.style";

const Loading = () => {
  return (
    <LoadingContainer>
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

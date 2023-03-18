import { HeaderContainer } from "./Header.style";
import { Wrapper } from "components";
import { Logo } from "assets";
const Header = () => {
  return (
    <HeaderContainer>
      <Wrapper
        style={{
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderBottom: "1px solid #ffffff50",
        }}
      >
        <Logo width={250} />
      </Wrapper>
    </HeaderContainer>
  );
};

export { Header };

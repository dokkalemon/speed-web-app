import { WrapperContainer } from "./Wrapper.style";
import { IWrapperProps } from "./Wrapper.types";

const Wrapper = ({
  style,
  children,
}: IWrapperProps) => {
  return (
    <WrapperContainer style={style}>
      {children}
    </WrapperContainer>
  );
};

export { Wrapper };

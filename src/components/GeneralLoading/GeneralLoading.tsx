import { Icon } from "@iconify/react";
import { GeneralLoadingContainer } from "./GeneralLoading.style";

const GeneralLoading = () => {
  return (
    <GeneralLoadingContainer>
      <Icon icon="svg-spinners:bars-scale-fade" style={{ color: "white" }} />
    </GeneralLoadingContainer>
  );
};

export { GeneralLoading };

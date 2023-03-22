import { Divider, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { Loading } from "components/Loading/Loading";
import { colorResponse, responseMessage } from "constants/references";
import { IDomainProps } from "types/domains";
import { MainSection } from "./components";

const Result = ({ loading, activeSite }: { loading: boolean; activeSite: IDomainProps }) => {
  console.log(activeSite);
  return (
    <>
      {loading ? (
        <Loading />
      ) : activeSite ? (
        <>
          <Stack
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            gap="10px"
          >
            <Typography variant="h5">Report - {activeSite.domain}</Typography>
            <Stack flexDirection="row" gap="5px" sx={{ marginBottom: "1px" }}>
              <Typography variant="body1" sx={{ fontWeight: "500" }}>
                Status:
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontWeight: "500",
                  color: colorResponse[activeSite?.status as number] || "#ffffff",
                }}
              >
                {responseMessage[activeSite?.status as number] || ""}
              </Typography>
            </Stack>
          </Stack>
          {activeSite?.status === 500 ? (
            <Typography sx={{ marginTop: "20px" }}>{activeSite?.errorMessage}</Typography>
          ) : null}

          <MainSection site={activeSite} />
          <Divider />
        </>
      ) : (
        ""
      )}
    </>
  );
};

export { Result };

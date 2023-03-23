import { Divider, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { Loading } from "components/Loading/Loading";
import { colorResponse, responseMessage } from "constants/references";
import { IDomainProps, IPerformanceResultProps, IPrimaryCategoryProps } from "types/domains";

import { Category, MainSection } from "./components";

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
            {activeSite.results?.warningsAndSettings?.runWarnings ? (
              <Typography variant="caption" sx={{ fontWeight: "500" }}>
                {activeSite.results?.warningsAndSettings?.runWarnings}
              </Typography>
            ) : null}
            <Typography variant="caption" sx={{ fontWeight: "500" }}>
              Richiesta effettuata con: {activeSite.results?.warningsAndSettings?.environment}
            </Typography>
          </Stack>
          {activeSite?.status === 500 ? (
            <Typography sx={{ marginTop: "20px" }}>{activeSite?.errorMessage}</Typography>
          ) : null}

          <MainSection site={activeSite} />
          <Stack alignItems="center">
            <Divider />
            <Typography variant="h5" sx={{ margin: "20px 0px" }}>
              Alcuni report
            </Typography>
            {activeSite.results?.performance?.map((el: IPerformanceResultProps) => (
              <Category category={el} />
            ))}
          </Stack>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export { Result };

import { Loading } from "components/Loading/Loading";
import { useContext } from "react";
import { SearchSiteContext } from "contexts/SearchContext";
import { Stack, Typography } from "@mui/material";
import { colorResponse } from "constants/references";

const Result = ({ loading, activeSite }: { loading: boolean; activeSite: number }) => {
  //context
  const { domains } = useContext(SearchSiteContext);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Stack flexDirection="row" justifyContent="flex-start" alignItems="flex-end" gap="10px">
            <Typography variant="h5">Report - {domains[activeSite]?.domain}</Typography>
            <Stack flexDirection="row" gap="5px" sx={{ marginBottom: "1px" }}>
              <Typography variant="body1" sx={{ fontWeight: "500" }}>
                Status:
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontWeight: "500",
                  color: colorResponse[domains[activeSite]?.status as number] || "#ffffff",
                }}
              >
                {domains[activeSite]?.status === 200 ? "Success" : "Error"}
              </Typography>
            </Stack>
          </Stack>
          {domains[activeSite]?.status === 500 ? (
            <Typography sx={{ marginTop: "20px" }}>{domains[activeSite]?.errorMessage}</Typography>
          ) : null}

          <>
            <div style={{ position: "relative" }}></div>
          </>
        </>
      )}
    </>
  );
};

export { Result };

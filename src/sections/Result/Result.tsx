import { Button, Divider, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { Loading } from "components/Loading/Loading";
import { colorResponse, responseMessage } from "constants/references";
import useSessions from "hooks/api/useSessions";
import { IDomainProps, IPerformanceResultProps } from "types/domains";
import { useContext } from "react";
import { DomainsContext } from "contexts/DomainsContext";
import { Category, MainSection } from "./components";
import { IResultProps } from "./Result.types";

const Result = ({ loading, activeSite }: IResultProps) => {
  const { saveSession, deleteSession } = useSessions();
  const { domains, setDomains, statistics, setStatistics, setSnackbar } =
    useContext(DomainsContext);

  const onSaveSession = async () => {
    activeSite.saved = true;
    const response = await saveSession({ session: activeSite });

    if (!response || response.status !== 201) {
      const filterStatistics = statistics.filter(
        (el: IDomainProps) => el.domain !== activeSite.domain
      );
      const newActiveSite = { ...activeSite, saved: true };
      setStatistics([...filterStatistics, newActiveSite]);

      setSnackbar({ variant: "error", message: "Internal Server Error", visible: true });
      return;
    }
    if (response && response.status === 201) {
      const filterStatistics = statistics.filter(
        (el: IDomainProps) => el.domain !== activeSite.domain
      );
      const newActiveSite = { ...activeSite, saved: false };
      setStatistics([...filterStatistics, newActiveSite]);

      setSnackbar({
        variant: "success",
        message: "Salvataggio eseguito con successo",
        visible: true,
      });
      return;
    }
  };

  const onDeleteSession = async () => {
    const otherDomains: string[] = domains.filter((el: string) => el !== activeSite?.domain);
    setDomains(otherDomains);

    const otherStatistics: IDomainProps[] = statistics.filter(
      (el: IDomainProps) => el.domain !== activeSite?.domain
    );
    setStatistics(otherStatistics);
    if (activeSite.saved) {
      await deleteSession({ id: activeSite?.id });
    }
  };

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
            <Stack flexDirection="row" sx={{ width: "100%", marginTop: "30px" }} gap="10px">
              <Button
                variant="contained"
                size="large"
                fullWidth
                color="success"
                disabled={activeSite.saved}
                onClick={onSaveSession}
              >
                SALVA COME NUOVA SESSIONE
              </Button>
              <Button
                variant="contained"
                size="large"
                fullWidth
                color="error"
                onClick={() => onDeleteSession()}
              >
                ELIMINA SESSIONE
              </Button>
            </Stack>
          </Stack>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export { Result };

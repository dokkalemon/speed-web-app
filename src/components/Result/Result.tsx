import { Loading } from "components/Loading/Loading";
import { useContext } from "react";
import { SearchSiteContext } from "contexts/SearchContext";
import { Typography } from "@mui/material";
const Result = ({ loading, activeSite }: { loading: boolean; activeSite: number }) => {
  //context
  const { domains } = useContext(SearchSiteContext);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Typography variant="h5">Report - {domains[activeSite]}</Typography>
        </>
      )}
    </>
  );
};

export { Result };

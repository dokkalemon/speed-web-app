import { Loading } from "components/Loading/Loading";

const Result = ({ loading }: { loading: boolean }) => {
  return <>{loading ? <Loading /> : null}</>;
};

export { Result };

import { IDomainProps } from "types/domains";

interface IReqProps {
  session: IDomainProps;
}

const useSessions = ({
  startGLoading,
  stopGLoading,
}: {
  startGLoading: VoidFunction;
  stopGLoading: VoidFunction;
}) => {
  const handpoint = "http://localhost:3001/sites";

  const getSessions = async () => {
    try {
      startGLoading();
      const response = await fetch(handpoint);
      console.log(response);
      const data = response.json();
      return data;
    } catch (err) {
      console.error(err);
      return err;
    } finally {
      stopGLoading();
    }
  };

  const saveSession = async ({ session }: IReqProps) => {
    try {
      startGLoading();
      const response = await fetch(handpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(session),
      });
      return response;
    } catch (err) {
      console.error(err);
      return err;
    } finally {
      stopGLoading();
    }
  };

  const deleteSession = async ({ id }: { id: number }) => {
    try {
      startGLoading();
      const response = await fetch(`${handpoint}/${id}`, { method: "DELETE" });
      return response;
    } catch (err) {
      console.error(err);
      return err;
    } finally {
      stopGLoading();
    }
  };

  return {
    getSessions,
    saveSession,
    deleteSession,
  };
};

export default useSessions;

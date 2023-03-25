import { useState } from "react";
import { IDomainProps } from "types/domains";

interface IReqProps {
  session: IDomainProps;
}

export interface IResponseProps {
  type: string;
  url: string;
  redirected: boolean;
  status: number;
  ok: boolean;
  statusText: string;
  headers: any;
  bodyUsed: boolean;
}

const useSessions = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const handpoint = "http://localhost:3001/sites";
  const getSessions = async () => {
    try {
      setLoading(true);
      const response = await fetch(handpoint);
      const data = response.json();
      return data;
    } catch (err) {
      console.error(err);
      return err;
    } finally {
      setLoading(false);
    }
  };

  const saveSession = async ({ session }: IReqProps): Promise<IResponseProps | any> => {
    try {
      setLoading(true);
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
      setLoading(false);
    }
  };

  const deleteSession = async ({ id }: { id: string }): Promise<IResponseProps | any> => {
    try {
      setLoading(true);
      const response = await fetch(`${handpoint}/${id}`, {
        method: "DELETE",
      });
      return response;
    } catch (err) {
      console.error(err);
      return err;
    } finally {
      setLoading(false);
    }
  };

  return {
    getSessions,
    saveSession,
    deleteSession,
    loading,
  };
};

export default useSessions;

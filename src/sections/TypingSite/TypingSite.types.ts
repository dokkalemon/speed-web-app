import { FormEvent } from "react";

export interface ITypingSiteProps {
  handleSubmit: (
    e: FormEvent<HTMLFormElement>
  ) => void;
}

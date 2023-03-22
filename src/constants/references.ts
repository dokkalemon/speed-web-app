interface IColorResponseProps {
  [key: number]: string;
}

export const colorResponse: IColorResponseProps = {
  200: "lightgreen",
  500: "red",
};
interface IResponseMessageProps {
  [key: number]: string;
}

export const responseMessage: IResponseMessageProps = {
  200: "Success",
  500: "Error",
};

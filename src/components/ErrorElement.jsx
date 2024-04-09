import { useRouteError } from "react-router-dom";

const ErrorElement = () => {
  const error = useRouteError();
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <h1 className="text-6xl font-bold">Oops!</h1>
      <p className="text-3xl font-medium">Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default ErrorElement;

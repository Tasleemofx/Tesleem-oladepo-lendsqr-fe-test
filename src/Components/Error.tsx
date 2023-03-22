import { useRouteError } from "react-router-dom";

interface ErrorObj{
    statusText: string,
    messsage: string
}
export default function ErrorPage():JSX.Element {
  

  return (
    <div className="fc-jcc-aic">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      
        <h1>Page Not Found</h1>
      
    </div>
  );
}
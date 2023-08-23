import { useRouteError } from "react-router-dom"

export default function Error() {
    const error = useRouteError();
  return (
    <div>
        <h1>Oops Somthing went Wrong</h1>
        <h2>{error.status + " " + error.statusText} 💥💥</h2>
    </div>
  )
}

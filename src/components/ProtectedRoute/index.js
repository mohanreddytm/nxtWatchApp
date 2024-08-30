import { Route, withRouter } from "react-router-dom";

import Cookies from "js-cookie";

const ProtectedRoute = (props) => {
  const jwtToken = Cookies.get("jwt_token");
  console.log(jwtToken);
  console.log("first");
  if (jwtToken === undefined) {
    const { history } = props;
    history.replace("/login");
  }
  return <Route {...props} />;
};

export default withRouter(ProtectedRoute);

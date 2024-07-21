import { GoogleLogin } from "@react-oauth/google";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../api/index.js";

function GoogleLoginCredentials() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users);
  console.log(user);
  function decodeJwtResponse(token) {
    var base64Url = token.split(".")[1];
    var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    var jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );

    return JSON.parse(jsonPayload);
  }
  return (
    <div>
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          const data = decodeJwtResponse(credentialResponse.credential);
          // console.log(data);
          dispatch(userLogin({ email: data.email }));
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      />
    </div>
  );
}

export default GoogleLoginCredentials;

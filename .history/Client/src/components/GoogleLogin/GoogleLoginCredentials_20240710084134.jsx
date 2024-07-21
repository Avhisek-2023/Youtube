import { GoogleLogin } from "@react-oauth/google";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../api";

function GoogleLoginCredentials() {
  return (
    <div>
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          const data = decodeJwtResponse(credentialResponse.credential);
          console.log(data);
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

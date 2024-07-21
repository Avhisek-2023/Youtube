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

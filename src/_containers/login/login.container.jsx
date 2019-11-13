function LoginContainer() {
  return (
    <div className={"login-container"}>
      <InputCompponent name={"username"} color={"red"} />
      <InputCompponent name={"password"} color={"green"} />
      <ButtonComponent
        name={"Login"}
        onClick={() => {
          console.log("collect all and send to server");
        }}
      />
    </div>
  );
}

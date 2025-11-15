window.onload = () => {
  document.getElementById("button").onclick = () => {
    YaAuthSuggest.init(
      {
        client_id: "f7b7acf3673f41668b3ac33775ad56cf",
        response_type: "token",
        redirect_uri: "https://oauth-master-class-81jj.vercel.app/token.html",
      },
      "https://oauth-master-class-81jj.vercel.app",
      {
        view: "button",
        parentId: "buttonContainer",
        buttonSize: "m",
        buttonView: "main",
        buttonTheme: "light",
        buttonBorderRadius: "0",
        buttonIcon: "ya",
      }
    )
      .then(({ handler }) => handler())
      .then((data) => console.log("Сообщение с токеном", data))
      .catch((error) => console.log("Обработка ошибки", error));
  };
};

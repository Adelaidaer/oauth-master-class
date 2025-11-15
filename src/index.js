const authorize = ({
  default_avatar_id: defaultAvatarId,
  display_name: displayName,
}) => {
  const avatarHtml = `<div class="avatar" style="background-image:url(’https://avatars.mds.yandex.net/get-yapic/${defaultAvatarId}/islands-middle’)"></div>`;
  const nameHtml = `<div class="name">${displayName}</div>`;
  document.getElementById("auth").innerHTML = `${avatarHTML}${nameHTML}`;
};

const fetchYandexData = (token) =>
  fetch().then(
    (res) => res.json()
);

window.onload = () => {
  document.getElementById("suggest").onclick = () => {
   YaAuthSuggest.init(
      {
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

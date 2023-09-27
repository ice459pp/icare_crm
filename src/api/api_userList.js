import appConfig from "../app-config.json";

export const apiUserList = async (
  token = "",
  onError = () => {},
  onComplete = () => {}
) => {
  try {
    const apiUrl = `${appConfig.url}/users/visitor`;
    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const json = await response.json();
    // console.log(json ,'apiUserList')
    if (!response.ok) {
      throw new Error("Error Occur");
    }
    if (json.status) {
      const data = json.data;
      onComplete(data);
    } else {
      onError(json.error);
    }
  } catch (error) {
    onError(error);
  }
};

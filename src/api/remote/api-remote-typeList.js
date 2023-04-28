import appConfig from "../../app-config.json";

export const apiRemoteTypeList = async (
  token = "",
  onError = () => {},
  onComplete = () => {}
) => {
  try {
    const apiUrl = `${appConfig.url}/remote/type/list`;
    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const json = await response.json();
    if (!response.ok) {
      throw new Error("Error Occur");
    }
    if (json.status) {
      const data = json.data;
      onComplete(data);
    } else {
      onError(json.error, json.code);
    }
  } catch (error) {
    onError(error);
  }
};

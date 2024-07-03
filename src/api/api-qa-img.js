import appConfig from "../app-config.json"

export const apiQaImage = async (
    token = "",
    file,
    onError = () => { },
    onComplete = () => { }
) => {

    try {
        const apiUrl = `${appConfig.url}/qa/upload/image`;
        let formData = new FormData();
        formData.append("file", file)

        const response = await fetch(
            apiUrl, {
            method: 'POST',
            body: formData,
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })

        const json = await response.json();
        if (!response.ok) {
            throw new Error("Error Occur")
        }
        if (json.status) {
            const data = json.data;
            onComplete(data)
        }

    } catch (error) {
        onError(error)
    }
}
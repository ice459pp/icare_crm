import appConfig from "../app-config.json"

export const apiQaDelete = async (
    token ="",
    id,
    onError = () => {},
    onComplete = () => {}
) => {
    try {
        const apiUrl = `${appConfig.url}/qa/delete`;
        let formData = new FormData();
        formData.append("id", id)

        const response = await fetch(
            apiUrl,{
                method:'POST',
                body: formData,
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }
        )

        const json = await response.json()
        if (!response.ok) {
            throw new Error("Error Occur")
          }
          if (json.status) {
            onComplete()
          } else {
            onError(json.error)
          }
    } catch (error) {
            onError(error)        
    }
}
import appConfig from "../app-config.json";

export const apiQaInfo = async (
    token = "",
    id ="",
    onError =  () => {},
    onComplete = () => {}
) => {
    try {
        const urlParams = new URLSearchParams();
        if (id){
            urlParams.append("id", id);            
        }
        const queryString = urlParams.toString();
        const apiUrl = `${appConfig.url}/qa/info?${queryString}`;
        const response = await fetch (apiUrl, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,                
            },
        });
        const json = await response.json();
        if(!response.ok){
            throw new Error("Error Occur")
        }
        if(json.status){
            const data = json.data;
            onComplete(data);
        }

    }catch (error) {
        onError(error);
    }
};
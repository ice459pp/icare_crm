import appConfig from "../../app-config.json"

export const apiQaList = async (
    token ="",
    category = "",
    keyword = "",
    status = "",
    onError = () => {},
    onComplete = () => {}
) => {
    try {
        const urlParams = new URLSearchParams();
        if (category){
            urlParams.append("category", category);
        }

        if (keyword){
            urlParams.append("keyword", keyword);
        }

        if (status){
            urlParams.append("status", status);
        }
        const queryString = urlParams.toString();
        const apiUrl = `${appConfig.url}/qa/list?${queryString}`;
        //console.log("url : " + apiUrl);
        const response = await fetch (apiUrl, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,                
            },
        });
        const json  = await response.json();
        if(!response.ok){
            throw new Error("Error Occur");
        }
        if (json.status) {
            const data = json.data;
            //console.log(data)
            onComplete(data);
        }
    }catch (error) {
        onError(error);
    }
};

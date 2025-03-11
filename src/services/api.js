import axios from "axios";

const apiClient = axios.create({
    baseURL: "http://localhost:8080/spells",
    headers: {
        "Content-Type":"applicayion/json",
    },
})

export const getData = async () => {
    try{
        const response = await apiClient.get("/allSpells");
        return response.data;
    }catch(error){
        console.error("Ошибка при получении данных",error);
        throw error;
    }
}
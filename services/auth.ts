import axios from "axios";
import { LoginTypes } from "./data-types";

const ROOT_API = process.env.NEXT_PUBLIC_API;
const API_VERSION = 'api/v1';


export async function setSignUp(data: string) {
    const URL = 'auth/signup';

    const response = await axios.post(`${ROOT_API}${API_VERSION}${URL}`, data).catch((err) => err.response);
    console.log(response)
    const axiosResponse = response.data;
    if(axiosResponse?.error === 1){
        return axiosResponse;
    }
    return axiosResponse.data;
}
export async function setSignIn(data: LoginTypes) {
    const URL = 'auth/signin';

    const response = await axios.post(`${ROOT_API}${API_VERSION}${URL}`, data).catch((err) => err.response);
    console.log(response)
    const axiosResponse = response.data;
    if(axiosResponse?.error === 1){
        return axiosResponse;
    }
    return axiosResponse.data;
}
import AxiosInstance from "../assets/axios";
import { baseUrl } from "../conf/conf";

const GetMoments = async (page) => {
  try {
    const response = await AxiosInstance.get(
      `${baseUrl}/moments/watch/?page=${page}`
    );
    return response.data
  } catch (error) {
    console.log("error occured while getting moment", error);
  }
};


const Leap = async(moment_id)=>{
  try{
    const data = {
      "moment_id":moment_id
    }
    const response = await AxiosInstance.post(`${baseUrl}/moments/leap/`, data)
    return response.status
  }catch(error){
    console.log("error occurred while leaping", error)
  }
}


export { GetMoments, Leap };


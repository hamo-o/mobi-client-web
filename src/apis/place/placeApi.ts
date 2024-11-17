import apiClient from "@/apis";
import { BaseResponse, Place, PlaceDetail } from "@/types/dto";

const placeApi = {
  GET_PLACE_LIST: async (): Promise<BaseResponse<Place[]>> => {
    apiClient.defaults.headers.Authorization = `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`;
    const response = await apiClient.get("/place");
    return response.data;
  },
  POST_PLACE_LIST: async (place: Place): Promise<BaseResponse<Place>> => {
    apiClient.defaults.headers.Authorization = `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`;
    const response = await apiClient.post("/place", place);
    return response.data;
  },
  GET_PLACE_DETAIL: async (id: number): Promise<BaseResponse<PlaceDetail>> => {
    apiClient.defaults.headers.Authorization = `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`;
    const response = await apiClient.get(`/place/${id}`);
    return response.data;
  },
};

export default placeApi;

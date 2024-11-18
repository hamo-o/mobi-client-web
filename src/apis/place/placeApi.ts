import apiClient from "@/apis";
import { BaseResponse, Place, PlaceDetail } from "@/types/dto";

const placeApi = {
  GET_PLACE_LIST: async (): Promise<BaseResponse<Place[]>> => {
    const response = await apiClient.get("/place");
    return response.data;
  },
  POST_PLACE_LIST: async (place: Place): Promise<BaseResponse<Place>> => {
    const response = await apiClient.post("/place", place);
    return response.data;
  },
  GET_PLACE_DETAIL: async (id: number): Promise<BaseResponse<PlaceDetail>> => {
    const response = await apiClient.get(`/place/${id}`);
    return response.data;
  },
};

export default placeApi;

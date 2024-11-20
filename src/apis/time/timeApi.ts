import createApiClient from "..";

import { BaseResponse, PlaceTime, PlaceTimeRequestDto } from "@/types/dto";

const timeApi = {
  POST_PLACE_TIME: async (placeId: number, data: PlaceTimeRequestDto) => {
    const apiClient = createApiClient();
    const response = await apiClient.post("/place-time", JSON.stringify(data), {
      params: { placeId },
    });
    return response.data;
  },

  GET_PLACE_TIME: async (): Promise<BaseResponse<PlaceTime[]>> => {
    const apiClient = createApiClient();
    const response = await apiClient.get("/place-time/me");
    return response.data;
  },
};

export default timeApi;

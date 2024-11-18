import createApiClient from "..";

import {
  BaseResponse,
  UserVisitUpdateBookMarkRequest,
  UserPlace,
} from "@/types/dto";

const visitApi = {
  // GET_PLACE_LIST: async (): Promise<BaseResponse<Place[]>> => {
  //   const apiClient = serverApiClient();
  //   const response = await apiClient.get("/place");
  //   return response.data;
  // },
  PATCH_USER_VISIT: async (
    placeId: number,
    request: UserVisitUpdateBookMarkRequest
  ): Promise<BaseResponse<UserPlace>> => {
    const apiClient = createApiClient();
    const response = await apiClient.patch("/user-visit", null, {
      params: { placeId, ...request },
    });
    return response.data;
  },
  // GET_PLACE_DETAIL: async (id: number): Promise<BaseResponse<PlaceDetail>> => {
  //   const apiClient = serverApiClient();
  //   const response = await apiClient.get(`/place/${id}`);
  //   return response.data;
  // },
};

export default visitApi;

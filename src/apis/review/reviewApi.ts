import createApiClient from "..";

import { BaseResponse, Review, ReviewCreateDto } from "@/types/dto";

const reviewApi = {
  POST_REVIEW: async (placeId: number, review: ReviewCreateDto) => {
    const apiClient = createApiClient();
    const response = await apiClient.post(
      `/review/${placeId}`,
      JSON.stringify(review)
    );
    return response.data;
  },

  GET_REVIEW_LIST: async (
    placeId: number,
    time: string
  ): Promise<BaseResponse<Review[]>> => {
    const apiClient = createApiClient();
    const response = await apiClient.get(`/review/${placeId}`, {
      params: { time },
    });
    return response.data;
  },
};

export default reviewApi;

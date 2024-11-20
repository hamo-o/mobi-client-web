import { useQueryClient, useMutation } from "@tanstack/react-query";
import reviewApi from "@/apis/review/reviewApi";
import { BaseResponse, ReviewCreateDto } from "@/types/dto";
import { reviewKeys } from "@/constants/queryKeys";

export const useReview = (placeId: number) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (data: ReviewCreateDto) => reviewApi.POST_REVIEW(placeId, data),
    onSuccess: (response: BaseResponse<null>, data: ReviewCreateDto) => {
      if (!response.success) return;
      queryClient.invalidateQueries({
        queryKey: reviewKeys.all(placeId, data.time),
      });
      return response.success;
    },
    onError: (error: any) => {
      console.error(error);
    },
  });

  return {
    mutation,
  };
};

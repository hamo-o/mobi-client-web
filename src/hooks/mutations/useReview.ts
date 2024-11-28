import { useQueryClient, useMutation } from "@tanstack/react-query";
import reviewApi from "@/apis/review/reviewApi";
import { BaseResponse, ReviewCreateDto } from "@/types/dto";
import { reviewKeys } from "@/constants/queryKeys";
import { useRouter } from "next/navigation";

export const useReview = (placeId: number) => {
  const queryClient = useQueryClient();
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: (data: ReviewCreateDto) => reviewApi.POST_REVIEW(placeId, data),
    onSuccess: (response: BaseResponse<null>, data) => {
      queryClient.invalidateQueries({
        queryKey: reviewKeys.all(placeId, data.time.split(":")[0]),
      });
      router.push(`/place/${placeId}`);
    },
    onError: (error: any) => {
      console.error(error);
    },
  });

  return {
    mutation,
  };
};

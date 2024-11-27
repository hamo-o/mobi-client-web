import timeApi from "@/apis/time/timeApi";
import { useMutation } from "@tanstack/react-query";
import { BaseResponse, PlaceTimeRequestDto } from "@/types/dto";
import { useQueryClient } from "@tanstack/react-query";
import { timeKeys } from "@/constants/queryKeys";
import { revalidateTagByName } from "@/utils/revalidateTagByName";

export const usePlaceTime = (placeId: number) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (data: PlaceTimeRequestDto) =>
      timeApi.POST_PLACE_TIME(placeId, data),
    onSuccess: (response: BaseResponse<null>) => {
      if (!response.success) return;
      queryClient.invalidateQueries({ queryKey: timeKeys.all });
      revalidateTagByName("time");
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

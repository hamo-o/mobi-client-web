import { useQuery } from "@tanstack/react-query";
import { Place } from "@/types/dto";
import placeApi from "@/apis/place/placeApi";
import { placeKeys } from "@/constants/queryKeys";

export const usePlaceQuery = () => {
  const { data: places, isLoading } = useQuery<Place[]>({
    queryKey: placeKeys.all,
    queryFn: async () => {
      const response = await placeApi.GET_PLACE_LIST();
      return response.data;
    },
  });

  return { places, isLoading };
};

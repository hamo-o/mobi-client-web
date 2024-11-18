import { placeKeys } from "@/constants/queryKeys";
import placeApi from "./placeApi";

const placeQueryOptions = {
  all: () => ({
    queryKey: placeKeys.all,
    queryFn: placeApi.GET_PLACE_LIST,
  }),

  detail: (id: number) => ({
    queryKey: placeKeys.detail(id),
    queryFn: () => placeApi.GET_PLACE_DETAIL(id),
  }),
};

export default placeQueryOptions;

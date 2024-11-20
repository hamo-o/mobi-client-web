import { reviewKeys } from "@/constants/queryKeys";

import reviewApi from "./reviewApi";

const reviewQueryOptions = {
  all: (placeId: number, time: string) => ({
    queryKey: reviewKeys.all(placeId, time),
    queryFn: () => reviewApi.GET_REVIEW_LIST(placeId, time),
  }),
};

export default reviewQueryOptions;

import { reviewKeys } from "@/constants/queryKeys";

import reviewApi from "./reviewApi";

const reviewQueryOptions = {
  all: () => ({
    queryKey: reviewKeys.all,
    queryFn: reviewApi.GET_REVIEW_LIST,
  }),
};

export default reviewQueryOptions;

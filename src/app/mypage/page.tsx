import { NavigationLeft } from "@/components";
import { container } from "./mypage.css";
import { Hydrate, getDehydratedQuery } from "@/apis/utils/getDehydratedQuery";
import visitQueryOptions from "@/apis/visit/query";

import VisitList from "./_components/VisitList";

const Mypage = async () => {
  const { queryKey, queryFn } = visitQueryOptions.all();
  const places = await getDehydratedQuery({ queryKey, queryFn });

  if (!places) return null;

  return (
    <main className={container}>
      <Hydrate state={places}>
        <NavigationLeft />
        {places.state.data && <VisitList places={places.state.data.data} />}
      </Hydrate>
    </main>
  );
};

export default Mypage;

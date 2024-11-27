"use client";

import VisitList from "./_components/VisitList";
import timeQueryOptions from "@/apis/time/query";
import { useQuery } from "@tanstack/react-query";

const Mypage = () => {
  const { queryKey, queryFn } = timeQueryOptions.all();
  const places = useQuery({ queryKey, queryFn });

  if (!places) return null;

  return places.data && <VisitList places={places.data.data} />;
};

export default Mypage;

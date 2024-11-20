"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Input } from "../Input";
import placeQueryOptions from "@/apis/place/query";

import { container, box } from "./SearchBox.css";
import { RightArrow } from "@/icons/RightArrow";

import { useRouter } from "next/navigation";
import { set } from "react-datepicker/dist/date_utils";

const SearchBox = () => {
  const [text, setText] = useState<string>("");
  const { queryKey, queryFn } = placeQueryOptions.filter(text);
  const { data: places, isLoading } = useQuery({ queryKey, queryFn });
  const router = useRouter();

  return (
    <div style={{ width: "100%", position: "relative" }}>
      <Input
        placeholder="검색어를 입력하세요"
        icon
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      {places && !isLoading && places.data.length > 0 && (
        <div className={container}>
          {places.data.map((place) => {
            return (
              <div
                key={place.placeId}
                className={box}
                onClick={() => {
                  router.push(`/place/${place.placeId}`);
                  setText("");
                }}
              >
                {place.placeName}
                <RightArrow />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SearchBox;

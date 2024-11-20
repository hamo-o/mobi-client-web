import { Degree } from "./entity";

export interface BaseResponse<T> {
  status: number;
  success: boolean;
  message: string;
  data: T;
}

export interface LoginResponse {
  id?: number;
  name?: string;
  email?: string;
  imageUrl?: string;
  role?: "USER" | "ADMIN";
  tokenType?: string;
  tokenVo?: {
    accessToken: string;
    accessTokenAge: number;
    refreshToken: string;
    refreshTokenAge: number;
  };
}

export interface Place {
  placeId: number;
  placeName: string;
  imageUrl: string;
  statusKeyword: Degree;
  populationDensity: number;
  trafficStatus: Degree;
  latitude: string;
  longitude: string;
}

export type Timeline = {
  "6": string;
  "7": string;
  "8": string;
  "9": string;
  "10": string;
  "11": string;
  "12": string;
  "13": string;
  "14": string;
  "15": string;
  "16": string;
  "17": string;
  "18": string;
  "19": string;
  "20": string;
  "21": string;
  "22": string;
  "23": string;
  "24": string;
};

export interface PlaceDetail extends Place {
  location: string;
  populationDensity: number;
  trafficCommunication: string;
  populationDensityMsg: string;
  trafficCommunicationMsg: Degree;
  timeLine: Timeline;
  isVisit: true;
  isBookmarked: true;
}

export interface UserPlace {
  placeId: number;
  userPlaceId: number;
  imageUrl: string;
  placeName: string;
}

export interface UserVisitUpdateBookMarkRequest {
  bookMarkStatus: boolean;
}

export interface PlaceTime {
  placeId: number;
  visitTime: string;
  visitDate: string;
  placeName: string;
  placeImageUrl: string;
  status: "방문완료" | "방문예정";
}

export interface PlaceTimeRequestDto {
  placeTime: string;
  visitDate: string;
}

export interface ReviewCreateDto {
  message: string;
  time: string;
}

export interface Review {
  placeId: number;
  userVisitId: number;
  time: string;
  message: string;
  userName: string;
}

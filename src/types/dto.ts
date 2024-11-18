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

export interface PlaceDetail extends Place {
  trafficCommunication: string;
  populationDensityMsg: string;
  trafficCommunicationMsg: Degree;
}

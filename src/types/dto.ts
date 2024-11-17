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
  placeName: string;
  imageUrl: string;
  statusKeyword: string;
}

export interface PlaceDetail extends Place {
  placeId: number;
  latitude: string;
  longitude: string;
  populationDensity: number;
  trafficCommunication: string;
  populationDensityMsg: string;
  trafficCommunicationMsg: string;
}

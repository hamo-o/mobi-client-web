import { createContext } from "react";

export interface ReviewContextProps {
  time: number;
  setTime?: (time: number) => void;
}

const ReviewContext = createContext<ReviewContextProps>({
  time: new Date().getHours(),
});

export default ReviewContext;

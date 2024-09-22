"use client";

import {
  QueryClient,
  QueryClientProvider as BaseQueryClientProvider,
} from "@tanstack/react-query";
import { ReactNode } from "react";

const queryClient = new QueryClient();

export const QueryClientProvider = ({ children }: { children: ReactNode }) => {
  return (
    <BaseQueryClientProvider client={queryClient}>
      {children}
    </BaseQueryClientProvider>
  );
};

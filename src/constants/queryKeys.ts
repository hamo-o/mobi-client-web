export const placeKeys = {
  all: ["place"] as const,
  detail: (id: number) => [...placeKeys.all, id] as const,
  filter: (filter: string) => [...placeKeys.all, filter] as const,
};

import { useMutation, useQuery } from "react-query";
import { sendBookingMessage, sendQuickMessage } from "./api";

const useDataQuery = (queryFn, queryKey, queryParam = null, options = {}) => {
  const { data, isLoading, refetch, isSuccess } = useQuery(
    queryParam ? [queryKey, queryParam] : [queryKey],
    () => queryFn(...(Array.isArray(queryParam) ? queryParam : [queryParam])),
    {
      enabled: options.enabled ?? !!queryParam,
      ...options,
    }
  );
  return { data, isLoading, refetch, isSuccess };
};

const useDataMutation = (mutationFn, mutationKey, options = {}) => {
  const { mutate, isLoading, data } = useMutation(mutationFn, {
    mutationKey,
    ...options,
  });
  return { mutate, isLoading, data };
};

export const useSendBookingMessage = (options) =>
  useDataMutation(sendBookingMessage, "sendBookingMessage", options);
export const useSendQuickMessage = (options) =>
  useDataMutation(sendQuickMessage, "sendQuickMessage", options);
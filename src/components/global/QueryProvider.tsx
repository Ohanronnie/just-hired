import React, { useState } from "react";
import {
  QueryClientProvider,
  QueryClient,
  QueryCache,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";
import { usePostErrors } from "../../hooks/usePostErrors";
import { useCookies } from "react-cookie";

export default function QueryProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const navigate = useNavigate();
  const trigger = usePostErrors();
  const [, , removeCookie] = useCookies(["authCookie"]);

  const [queryClient, _] = useState(
    new QueryClient({
      queryCache: new QueryCache({
        onError: (err) => {
          const error = err as unknown as AxiosError<any>;
          trigger(error);
          const isBadRequest = error.code === "ERR_BAD_REQUEST";
          if (isBadRequest) {
            removeCookie("authCookie");
            navigate("/login");
          }
        },
      }),
    }),
  );

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

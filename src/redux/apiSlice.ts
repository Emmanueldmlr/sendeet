import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setCredentials, logOut } from "./features/auth/auth-slice";
import config from "@/configs";
import { RootState } from "./store";

const baseQuery = fetchBaseQuery({
  baseUrl: config.baseUrl,
  credentials: "include",
  prepareHeaders: (headers, { getState }: RootState) => {
    const token = getState().auth.token;
    const apiKey = config.apikey;
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    if (apiKey) {
      headers.set("Apikey", apiKey);
    }

    return headers;
  },
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result?.error?.originalStatus === 403) {
    console.log("sending refresh token");
    //send refresh token to get new access token
    const refreshResult = await baseQuery(
      "/auth/refresh-token",
      api,
      extraOptions
    );
    console.log(refreshResult);
    if (refreshResult?.data) {
      const user = api.getState().auth.user;
      //store the new token
      api.dispatch(setCredentials({ ...refreshResult.data, user }));
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logOut());
    }
  }
  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({}),
});

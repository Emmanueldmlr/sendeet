import { apiSlice } from "@/redux/apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: { ...credentials },
      }),
    }),
  }),
});

export const userCreateApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createAccount: builder.mutation({
      query: (credentials) => ({
        url: "/auth/user/sign-up",
        method: "POST",
        body: { ...credentials },
      }),
    }),
  }),
});
export const userLogOutApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    logOut: builder.mutation({
      query: (credentials) => ({
        url: "/auth/logout",
        method: "POST",
        body: { ...credentials },
      }),
    }),
  }),
});
export const { useLoginMutation } = authApiSlice;
export const { useCreateAccountMutation } = userCreateApiSlice;

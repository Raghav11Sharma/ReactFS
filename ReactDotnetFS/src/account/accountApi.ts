import { createApi } from "@reduxjs/toolkit/query/react";
import type { LoginSchema } from "../schemas/loginSchema";


export default function  accountApi()

// {
//  export const accountApi = createApi({
//     reducerPath: 'accountApi',
//     baseQuery: baseQueryWithErrorHandling,
//     tagTypes: ['UserInfo'],
//     endpoints: (builder) => ({
//         login: builder.mutation<void, LoginSchema>({
//             query: (creds:any) => {
//                 return {
//                     url: 'login?useCookies=true',
//                     method: 'POST',
//                     body: creds
//                 }
//             },
//             async onQueryStarted(_, {dispatch, queryFulfilled}) {
//                 try {
//                     await queryFulfilled;
//                     dispatch(accountApi.util.invalidateTags(['UserInfo']))
//                 } catch (error) {
//                     console.log(error);
//                 }
//             }
//         }),
// }

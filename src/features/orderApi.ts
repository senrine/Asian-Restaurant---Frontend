import { api } from "./api";

export const orderApi = api.injectEndpoints({
    endpoints: (builder) => ({
        createOrder: builder.mutation({
            query: (data) => ({
                url: "/order",
                method: "POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body: data
            })
        })
    })
})
export const {useCreateOrderMutation} = orderApi;
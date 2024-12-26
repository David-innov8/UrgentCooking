import { useQuery } from "@tanstack/react-query"
import Api from "../util/api"

export const GetRooms = () => {
    return useQuery({
        queryKey: ["rooms"],
        queryFn: () => Api.get("room/").then(res => res.data)
    })
}

export const GetARoom = (id: number) => {
    return useQuery({
        queryKey: ["room", id],
        queryFn: () => Api.get(`room/${id}`).then(res => res.data)
    })
}
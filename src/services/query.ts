import { useQuery } from "@tanstack/react-query"
import Api from "../util/api"

export const GetRooms = () => {
    return useQuery({
        queryKey: ["rooms"],
        queryFn: () => Api.get("room/").then(res => res.data)
    })
}
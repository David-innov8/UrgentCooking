import { useMutation } from "@tanstack/react-query"
import Api from "../util/api"

export const CreateRoom = () => {
    return useMutation({
        mutationFn: (data: any) => Api.post("room/", data).then(res => res.data)
    })
}
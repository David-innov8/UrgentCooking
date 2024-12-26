import { useMutation } from "@tanstack/react-query"
import Api from "../util/api"

export const CreateRoom = () => {
    return useMutation({
        mutationFn: (data: any) => Api.post("room/", data).then(res => res.data)
    })
}

export const CreateRoomReview = (id: number) => {
    return useMutation({
        mutationFn: (data: any) => Api.post(`room/${id}/review`, data).then(res => res.data)
    })
}

export const UpdateRoom = (id: number) => {
    return useMutation({
        mutationFn: (data: any) => Api.put(`room/${id}`, data).then(res => res.data)
    })
}

export const DeleteRoom = (id: number) => {
    return useMutation({
        mutationFn: () => Api.delete(`room/${id}`).then(res => res.data)
    })
}




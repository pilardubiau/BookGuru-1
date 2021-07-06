import axios from "axios";

export function addRatingAxios(value, userId, bookId) {
    const token = JSON.parse(localStorage.getItem("token"));

    return axios({
        method: "post",
        url: "/api/ratings",
        data: { value, userId, bookId },
        headers: { authorization: `Bearer ${token}` },
    })
}
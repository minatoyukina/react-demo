import axios from 'axios'
import qs from 'qs'

let http = {
    post: "",
    get: ""
};

http.post = function (api, data) {
    let params = qs.stringify(data);
    return new Promise((resolve) => {
        axios.post(api, params).then(res => {
            resolve(res)
        })
    })
};

http.get = function (api) {
    return new Promise((resolve) => {
        axios.get(api).then(res => {
            resolve(res)
        })
    })
};

export default http
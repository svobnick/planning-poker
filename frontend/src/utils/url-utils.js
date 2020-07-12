const getRoomId = (url) => {
    return url.split("/room/")[1]
}

const getUrlQueryParam = (query, param) => {
    let result = null
    query.split("&").forEach(function (item) {
        let tmp = item.split("=")
        if (tmp[0] === param) result = decodeURIComponent(tmp[1]);
    });
    return result
}

export {getRoomId, getUrlQueryParam}
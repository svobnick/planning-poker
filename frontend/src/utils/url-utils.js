const getRoomId = (url) => {
    return url.split("/room/")[1]
}

export {getRoomId}
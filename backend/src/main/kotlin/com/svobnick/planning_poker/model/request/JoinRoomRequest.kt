package com.svobnick.planning_poker.model.request

data class JoinRoomRequest(
    val roomId: String,
    val username: String
)
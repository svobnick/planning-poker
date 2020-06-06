package com.svobnick.planning_poker.model

data class JoinRoomRequest(
    val name: String,
    val roomId: String
)
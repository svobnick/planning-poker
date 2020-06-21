package com.svobnick.planning_poker.model.response

import com.svobnick.planning_poker.model.Task

data class JoinRoomResponse(
    val roomId: String,
    val userId: String,
    val task: Task
)
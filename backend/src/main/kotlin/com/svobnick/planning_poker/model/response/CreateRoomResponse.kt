package com.svobnick.planning_poker.model.response

import com.svobnick.planning_poker.model.Task

data class CreateRoomResponse(
    val roomId: String,
    val userId: String,
    val task: Task
)
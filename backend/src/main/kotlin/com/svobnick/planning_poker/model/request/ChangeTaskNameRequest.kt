package com.svobnick.planning_poker.model.request

data class ChangeTaskNameRequest(
    val taskId: String,
    val taskName: String
)
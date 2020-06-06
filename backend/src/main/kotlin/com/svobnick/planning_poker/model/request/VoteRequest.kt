package com.svobnick.planning_poker.model.request

data class VoteRequest(
    val taskId: String,
    val userId: String,
    val userName: String,
    val vote: Float
)
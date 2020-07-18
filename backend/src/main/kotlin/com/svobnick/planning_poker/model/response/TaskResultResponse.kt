package com.svobnick.planning_poker.model.response

data class TaskResultResponse(
    val average: Float,
    val elapsedTime: Long,
    val votesAmount: Int,
    val votes2names: Map<Float, MutableList<String>>
)
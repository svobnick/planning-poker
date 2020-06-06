package com.svobnick.planning_poker.model

import org.springframework.data.annotation.Id
import org.springframework.data.redis.core.RedisHash

@RedisHash
data class Room(
    @Id val roomId: String? = null,
    val createdAt: Long = System.currentTimeMillis(),
    var task: Task? = null
)
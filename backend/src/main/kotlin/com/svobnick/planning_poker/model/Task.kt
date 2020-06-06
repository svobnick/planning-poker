package com.svobnick.planning_poker.model

import org.springframework.data.annotation.Id
import org.springframework.data.redis.core.RedisHash

@RedisHash
data class Task(
    @Id val id: String? = null,
    val roomId: String,
    var name: String = "",
    val startAt: Long = System.currentTimeMillis(),
    val name2votes: MutableMap<String, Vote> = HashMap() // usedId – Pair<Name, Vote>
)
package com.svobnick.planning_poker.model

data class Room(
    var roomId: String? = null,
    val createdAt: Long = System.currentTimeMillis(),
    var task: Task? = null
) : HasId {
    override fun id(): String? {
        return roomId
    }

    override fun setId(id: String) {
        roomId = id
    }
}
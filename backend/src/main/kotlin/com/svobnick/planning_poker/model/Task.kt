package com.svobnick.planning_poker.model


data class Task(
    var taskId: String? = null,
    val roomId: String,
    var name: String = "",
    val startAt: Long = System.currentTimeMillis(),
    val name2votes: MutableMap<String, Vote> = HashMap() // usedId – Pair<Name, Vote>
) : HasId {
    override fun id(): String? {
        return taskId
    }

    override fun setId(id: String) {
        taskId = id
    }
}
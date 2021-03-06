package com.svobnick.planning_poker.service

import com.svobnick.planning_poker.storage.RoomStorage
import com.svobnick.planning_poker.storage.TaskStorage
import com.svobnick.planning_poker.model.Task
import com.svobnick.planning_poker.model.Vote
import com.svobnick.planning_poker.model.request.ChangeTaskNameRequest
import com.svobnick.planning_poker.model.request.VoteRequest
import com.svobnick.planning_poker.model.response.TaskResultResponse
import com.svobnick.planning_poker.utils.ResultCalculator
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service
import java.lang.IllegalArgumentException

@Service
class TaskService {

    @Autowired
    lateinit var taskStorage: TaskStorage
    @Autowired
    lateinit var roomStorage: RoomStorage

    fun createNewTask(roomId: String, userId: String, username: String): Task {
        val task = Task(roomId = roomId)
        task.name2votes.putIfAbsent(userId, Vote(username, null))
        return taskStorage.save(task)
    }

    fun getTask(taskId: String): Task {
        return taskStorage.findById(taskId)
            .orElseThrow { throw IllegalArgumentException("There's no task with taskId: $taskId") }
    }

    fun save(task: Task) {
        taskStorage.save(task)
    }

    fun updateTaskName(request: ChangeTaskNameRequest): String {
        var task = taskStorage.findById(request.taskId)
            .orElseThrow { throw IllegalArgumentException("There's no task with taskId: ${request.taskId}") }
        task.name = request.taskname
        task = taskStorage.save(task)
        return task.name
    }

    fun vote(request: VoteRequest): Task {
        var task = taskStorage.findById(request.taskId).orElseThrow {
            throw IllegalArgumentException("There's no task with taskId: ${request.taskId}")
        }
        task.name2votes[request.userId] = Vote(request.userName, request.vote)
        task = taskStorage.save(task)
        return task
    }

    fun isVoteOver(votes: Collection<Vote>): Boolean {
        return votes.all { it.vote != null }
    }

    fun computeResult(votes: MutableMap<String, Vote>, startAt: Long): TaskResultResponse {
        val elapsedTime = System.currentTimeMillis() - startAt
        val (votesAmount, average) = ResultCalculator.computeResult(votes)

        val votes2names: MutableMap<Float, MutableList<String>> = mutableMapOf()
        for (value in votes.values) {
            if (value.vote != null) {
                if (votes2names[value.vote] == null) {
                    votes2names[value.vote] = mutableListOf(value.username)
                } else {
                    votes2names[value.vote]!!
                    votes2names[value.vote]!!.add(value.username)
                }

            }
        }

        return TaskResultResponse(average, elapsedTime, votesAmount, votes2names)
    }

    fun startNewTaskRequest(roomId: String, oldTaskId: String): Task {
        val oldTask = taskStorage.findById(oldTaskId)
            .orElseThrow { throw IllegalArgumentException("There's no task with taskId: $oldTaskId") }
        val newTask = copyUsersToNewTask(roomId, oldTask)

        val room = roomStorage.findById(roomId).orElseThrow {
            throw IllegalArgumentException("Room $roomId not exist!")
        }
        room.task = newTask
        roomStorage.save(room)
        return newTask
    }

    private fun copyUsersToNewTask(roomId: String, oldTask: Task): Task {
        val result = Task(roomId = roomId)
        for (name2vote in oldTask.name2votes) {
            val vote: Vote = name2vote.value
            result.name2votes[name2vote.key] = Vote(vote.username, null)
        }
        return result
    }


}
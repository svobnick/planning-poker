package com.svobnick.planning_poker.service

import com.svobnick.planning_poker.dao.TaskDao
import com.svobnick.planning_poker.model.Task
import com.svobnick.planning_poker.model.Vote
import com.svobnick.planning_poker.model.request.VoteRequest
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service
import java.lang.IllegalArgumentException

@Service
class TaskService {

    @Autowired
    lateinit var taskDao: TaskDao

    fun createNewTask(roomId: String, userId: String, username: String): Task {
        val task = Task(roomId = roomId)
        task.name2votes.putIfAbsent(userId, Vote(username, null))
        return taskDao.save(task)
    }

    fun getTask(taskId: String): Task {
        return taskDao.findById(taskId)
            .orElseThrow { throw IllegalArgumentException("There's no task with taskId: $taskId") }
    }

    fun save(task: Task) {
        taskDao.save(task)
    }

    fun updateTaskName(taskId: String, taskName: String): String {
        var task = taskDao.findById(taskId)
            .orElseThrow { throw IllegalArgumentException("There's no task with taskId: $taskId") }
        task.name = taskName
        task = taskDao.save(task)
        return task.name
    }

    fun vote(request: VoteRequest): MutableMap<String, Vote> {
        var task = taskDao.findById(request.taskId).orElseThrow {
            throw IllegalArgumentException("There's no task with taskId: ${request.taskId}")
        }
        task.name2votes.putIfAbsent(request.userId, Vote(request.userName, request.vote))
        task = taskDao.save(task)
        return task.name2votes
    }


}
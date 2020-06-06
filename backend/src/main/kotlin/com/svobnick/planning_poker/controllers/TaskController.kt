package com.svobnick.planning_poker.controllers

import com.svobnick.planning_poker.model.Vote
import com.svobnick.planning_poker.model.request.VoteRequest
import com.svobnick.planning_poker.service.TaskService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.messaging.handler.annotation.MessageMapping
import org.springframework.messaging.handler.annotation.Payload
import org.springframework.messaging.handler.annotation.SendTo
import org.springframework.stereotype.Controller


@Controller
class TaskController {

    @Autowired
    lateinit var taskService: TaskService

    @MessageMapping("/task/change-name")
    @SendTo("/task/task-name")
    fun change(@Payload taskId: String, @Payload taskName: String): String {
        return taskService.updateTaskName(taskId, taskName)
    }

    @MessageMapping("/task/vote")
    @SendTo("/task/votes")
    fun vote(@Payload request: VoteRequest): MutableMap<String, Vote> {
        return taskService.vote(request)
    }
}
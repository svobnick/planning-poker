package com.svobnick.planning_poker.controllers

import com.svobnick.planning_poker.model.Vote
import com.svobnick.planning_poker.model.request.ChangeTaskNameRequest
import com.svobnick.planning_poker.model.request.VoteRequest
import com.svobnick.planning_poker.service.TaskService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.messaging.handler.annotation.MessageMapping
import org.springframework.messaging.handler.annotation.Payload
import org.springframework.messaging.handler.annotation.SendTo
import org.springframework.messaging.simp.SimpMessagingTemplate
import org.springframework.stereotype.Controller


@Controller
class TaskController {

    @Autowired
    lateinit var taskService: TaskService

    @Autowired
    lateinit var simpMessagingTemplate: SimpMessagingTemplate

    @MessageMapping("/task/change-name")
    @SendTo("/task/task-name")
    fun change(@Payload request: ChangeTaskNameRequest): String {
        // todo send response to concrete room
        // https://stackoverflow.com/questions/28387157/multiple-rooms-in-spring-using-stomp
        return taskService.updateTaskName(request)
    }

    @MessageMapping("/task/vote")
    @SendTo("/task/votes")
    fun vote(@Payload request: VoteRequest): MutableMap<String, Vote> {
        // todo send response to concrete room
        // https://stackoverflow.com/questions/28387157/multiple-rooms-in-spring-using-stomp
        return taskService.vote(request)
    }
}
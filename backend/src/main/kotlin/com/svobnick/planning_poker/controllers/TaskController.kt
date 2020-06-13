package com.svobnick.planning_poker.controllers

import com.svobnick.planning_poker.model.Task
import com.svobnick.planning_poker.model.request.ChangeTaskNameRequest
import com.svobnick.planning_poker.model.request.StartNewTaskRequest
import com.svobnick.planning_poker.model.request.VoteRequest
import com.svobnick.planning_poker.model.response.TaskVotesResultResponse
import com.svobnick.planning_poker.service.TaskService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.messaging.handler.annotation.MessageMapping
import org.springframework.messaging.handler.annotation.Payload
import org.springframework.messaging.handler.annotation.SendTo
import org.springframework.messaging.simp.SimpMessagingTemplate
import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.PostMapping


@Controller
class TaskController {

    @Autowired
    lateinit var taskService: TaskService

    @Autowired
    lateinit var messaging: SimpMessagingTemplate

    @MessageMapping("/task/change-name")
    @SendTo("/task/name")
    fun change(@Payload request: ChangeTaskNameRequest): String {
        return taskService.updateTaskName(request)
        TODO("send response to concrete room")
        // https://stackoverflow.com/questions/28387157/multiple-rooms-in-spring-using-stomp
    }

    @MessageMapping("/task/vote")
    fun vote(@Payload request: VoteRequest) {
        val voteResults = taskService.vote(request)
        messaging.convertAndSend("/task/votes", voteResults)
        if (taskService.isVoteOver(voteResults.values)) {
            messaging.convertAndSend("task/result", taskService.computeResult(voteResults))
        }
        TODO("send response to concrete room")
        // https://stackoverflow.com/questions/28387157/multiple-rooms-in-spring-using-stomp
    }

    @PostMapping("/task/finish")
    @SendTo("/task/result")
    fun finishVote(@Payload taskId: String): TaskVotesResultResponse {
        val task = taskService.getTask(taskId)
        return taskService.computeResult(task.name2votes)
        TODO("send response to concrete room")
        // https://stackoverflow.com/questions/28387157/multiple-rooms-in-spring-using-stomp
    }

    @PostMapping("/task/start")
    @SendTo("/task/new")
    fun startVote(@Payload request: StartNewTaskRequest): Task {
        return taskService.startNewTaskRequest(request)
        TODO("send response to concrete room")
        // https://stackoverflow.com/questions/28387157/multiple-rooms-in-spring-using-stomp
    }


}
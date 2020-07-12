package com.svobnick.planning_poker.controllers

import com.svobnick.planning_poker.model.request.ChangeTaskNameRequest
import com.svobnick.planning_poker.model.request.VoteRequest
import com.svobnick.planning_poker.service.TaskService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.ResponseEntity
import org.springframework.messaging.handler.annotation.DestinationVariable
import org.springframework.messaging.handler.annotation.MessageMapping
import org.springframework.messaging.handler.annotation.Payload
import org.springframework.messaging.simp.SimpMessagingTemplate
import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody


@Controller
class TaskController {

    @Autowired
    lateinit var taskService: TaskService

    @Autowired
    lateinit var messaging: SimpMessagingTemplate

    @MessageMapping("/change-name/{roomId}")
    fun change(@DestinationVariable roomId: String, @Payload request: ChangeTaskNameRequest) {
        val updatedTaskName = taskService.updateTaskName(request)
        messaging.convertAndSend("/task/name/${roomId}", updatedTaskName)
    }

    @PostMapping("/vote/{roomId}")
    fun vote(@PathVariable roomId: String, @RequestBody request: VoteRequest): ResponseEntity<Any> {
        val voteResults = taskService.vote(request)
        messaging.convertAndSend("/task/players/${roomId}", voteResults)
        if (taskService.isVoteOver(voteResults.values)) {
            messaging.convertAndSend("/task/result/${roomId}", taskService.computeResult(voteResults))
        }
        return ResponseEntity.ok().build()
    }

    @PostMapping("/finish/{roomId}")
    fun finishVote(@PathVariable roomId: String, @RequestBody taskId: String): ResponseEntity<Any> {
        val task = taskService.getTask(taskId)
        val result = taskService.computeResult(task.name2votes)
        messaging.convertAndSend("/task/result/${roomId}", result)
        return ResponseEntity.ok().build()
    }

    @PostMapping("/start/{roomId}")
    fun startVote(@PathVariable roomId: String): ResponseEntity<Any> {
        val result = taskService.startNewTaskRequest(roomId)
        messaging.convertAndSend("/task/new/${roomId}", result)
        return ResponseEntity.ok().build()
    }


}
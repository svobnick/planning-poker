package com.svobnick.planning_poker.controllers

import com.svobnick.planning_poker.model.request.CreateRoomRequest
import com.svobnick.planning_poker.model.request.JoinRoomRequest
import com.svobnick.planning_poker.model.response.JoinRoomResponse
import com.svobnick.planning_poker.service.RoomService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.ResponseEntity
import org.springframework.messaging.simp.SimpMessagingTemplate
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RestController

@RestController
class RoomController {

    @Autowired
    lateinit var roomService: RoomService

    @Autowired
    lateinit var messaging: SimpMessagingTemplate


    @PostMapping("/create")
    fun createNewRoom(@RequestBody createRequest: CreateRoomRequest): ResponseEntity<JoinRoomResponse> {
        val result = roomService.createNewRoom(createRequest)
        return ResponseEntity.ok(result)
    }

    @PostMapping("/join")
    fun joinToRoom(@RequestBody joinRequest: JoinRoomRequest): ResponseEntity<JoinRoomResponse> {
        val result = roomService.joinToRoom(joinRequest)
        messaging.convertAndSend("/task/players/${result.roomId}", result.task.name2votes)
        return ResponseEntity.ok(result)
    }
}
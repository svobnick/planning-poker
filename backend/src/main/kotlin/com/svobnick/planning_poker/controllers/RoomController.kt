package com.svobnick.planning_poker.controllers

import com.svobnick.planning_poker.model.request.CreateRoomRequest
import com.svobnick.planning_poker.model.request.JoinRoomRequest
import com.svobnick.planning_poker.model.response.CreateRoomResponse
import com.svobnick.planning_poker.model.response.JoinRoomResponse
import com.svobnick.planning_poker.service.RoomService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RestController

@RestController
class RoomController {

    @Autowired
    lateinit var roomService: RoomService

    @PostMapping("/create")
    fun createNewRoom(@RequestBody createRequest: CreateRoomRequest): ResponseEntity<CreateRoomResponse> {
        return ResponseEntity.ok(roomService.createNewRoom(createRequest))
    }

    @PostMapping("/join")
    fun joinToRoom(@RequestBody joinRequest: JoinRoomRequest): ResponseEntity<JoinRoomResponse> {
        return ResponseEntity.ok(roomService.joinToRoom(joinRequest))
    }
}
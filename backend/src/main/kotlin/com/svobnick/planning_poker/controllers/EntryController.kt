package com.svobnick.planning_poker.controllers

import com.svobnick.planning_poker.model.CreateRoomRequest
import com.svobnick.planning_poker.model.JoinRoomRequest
import com.svobnick.planning_poker.service.RoomService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RestController

@RestController
class EntryController {

    @Autowired
    lateinit var roomService: RoomService

    @PostMapping("/create")
    fun createNewRoom(@RequestBody createRequest: CreateRoomRequest) {
        roomService.createNewRoom(createRequest)
    }

    @PostMapping("/join")
    fun joinToRoom(@RequestBody joinRequest: JoinRoomRequest) {
        roomService.joinToRoom(joinRequest)
    }
}
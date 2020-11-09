package com.svobnick.planning_poker.service

import com.svobnick.planning_poker.storage.RoomStorage
import com.svobnick.planning_poker.model.request.CreateRoomRequest
import com.svobnick.planning_poker.model.request.JoinRoomRequest
import com.svobnick.planning_poker.model.Room
import com.svobnick.planning_poker.model.Vote
import com.svobnick.planning_poker.model.response.JoinRoomResponse
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service
import java.lang.IllegalArgumentException
import java.util.*

@Service
class RoomService {

    @Autowired
    lateinit var taskService: TaskService
    @Autowired
    lateinit var roomStorage: RoomStorage

    fun createNewRoom(request: CreateRoomRequest): JoinRoomResponse {
        val room = roomStorage.save(Room())
        val userId = UUID.randomUUID().toString()
        val task = taskService.createNewTask(room.roomId!!, userId, request.username)
        room.task = task
        roomStorage.save(room)
        return JoinRoomResponse(room.roomId!!, userId, task)
    }

    fun joinToRoom(request: JoinRoomRequest): JoinRoomResponse {
        val room = roomStorage.findById(request.roomId).orElseThrow {
            throw IllegalArgumentException("Room ${request.roomId} not exist!")
        }
        val userId = UUID.randomUUID().toString()
        val task = taskService.getTask(room.task!!.taskId!!)
        task.name2votes[userId] = Vote(request.username, null)
        taskService.save(task)
        return JoinRoomResponse(room.roomId!!, userId, task)
    }

}
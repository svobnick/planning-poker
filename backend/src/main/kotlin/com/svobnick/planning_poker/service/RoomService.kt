package com.svobnick.planning_poker.service

import com.svobnick.planning_poker.dao.RoomDao
import com.svobnick.planning_poker.model.request.CreateRoomRequest
import com.svobnick.planning_poker.model.request.JoinRoomRequest
import com.svobnick.planning_poker.model.Room
import com.svobnick.planning_poker.model.Vote
import com.svobnick.planning_poker.model.response.CreateRoomResponse
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
    lateinit var roomDao: RoomDao

    fun createNewRoom(request: CreateRoomRequest): CreateRoomResponse {
        val room = roomDao.save(Room())
        val userId = UUID.randomUUID().toString()
        val task = taskService.createNewTask(room.roomId!!, userId, request.username)
        room.task = task
        roomDao.save(room)
        return CreateRoomResponse(room.roomId, userId, task)
    }

    fun joinToRoom(request: JoinRoomRequest): JoinRoomResponse {
        val room = roomDao.findById(request.roomId).orElseThrow {
            throw IllegalArgumentException("Room ${request.roomId} not exist!")
        }
        val userId = UUID.randomUUID().toString()
        val task = taskService.getTask(room.task!!.id!!)
        task.name2votes[userId] = Vote(request.username, null)
        taskService.save(task)
        return JoinRoomResponse(userId, task)
    }

}
package com.svobnick.planning_poker.service

import com.svobnick.planning_poker.dao.RoomDao
import com.svobnick.planning_poker.model.CreateRoomRequest
import com.svobnick.planning_poker.model.JoinRoomRequest
import com.svobnick.planning_poker.model.Room
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service
import java.lang.IllegalArgumentException
import java.util.*

@Service
class RoomService {

    @Autowired
    lateinit var roomDao: RoomDao

    fun createNewRoom(createRequest: CreateRoomRequest): String {
        val roomId = UUID.randomUUID().toString()
        roomDao.save(Room(roomId, System.currentTimeMillis()))
        return roomId
    }

    fun joinToRoom(joinRequest: JoinRoomRequest) {
        val room: Room = roomDao.findById(joinRequest.roomId).orElseThrow {
            throw IllegalArgumentException("Room ${joinRequest.roomId} not exist!")
        }
    }

}
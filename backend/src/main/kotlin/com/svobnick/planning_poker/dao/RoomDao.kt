package com.svobnick.planning_poker.dao

import com.svobnick.planning_poker.model.Room
import org.springframework.data.repository.CrudRepository
import org.springframework.stereotype.Repository

@Repository
interface RoomDao : CrudRepository<Room, String> {
}
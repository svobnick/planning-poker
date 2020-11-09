package com.svobnick.planning_poker.storage

import com.svobnick.planning_poker.model.Room
import org.springframework.stereotype.Component

@Component
class RoomStorage : CommonStorage<Room>() {
}
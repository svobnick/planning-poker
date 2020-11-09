package com.svobnick.planning_poker.storage

import com.svobnick.planning_poker.model.Task
import org.springframework.stereotype.Component

@Component
class TaskStorage : CommonStorage<Task>() {
}
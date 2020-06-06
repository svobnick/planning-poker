package com.svobnick.planning_poker.dao

import com.svobnick.planning_poker.model.Task
import org.springframework.data.repository.CrudRepository
import org.springframework.stereotype.Repository

@Repository
interface TaskDao : CrudRepository<Task, String> {
}
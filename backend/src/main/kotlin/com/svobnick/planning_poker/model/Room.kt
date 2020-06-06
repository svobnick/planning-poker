package com.svobnick.planning_poker.model

import javax.persistence.Column
import javax.persistence.Entity
import javax.persistence.Id

@Entity
data class Room(
    @Id val roomId: String,
    @Column(name = "created_at", nullable = false) val createdAt: Long
)
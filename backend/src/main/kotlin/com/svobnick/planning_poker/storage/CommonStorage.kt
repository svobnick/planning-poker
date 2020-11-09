package com.svobnick.planning_poker.storage

import com.svobnick.planning_poker.model.HasId
import java.util.*
import java.util.concurrent.ConcurrentHashMap
import java.util.concurrent.ConcurrentMap

abstract class CommonStorage<T : HasId> {
    private val storage: ConcurrentMap<String, T> = ConcurrentHashMap<String,T>()

    fun findById(id: String): Optional<T> {
        return Optional.of(storage.getOrDefault(id, null))
    }

    fun save(obj: T): T {
        if (obj.id() != null) {
            storage[obj.id()] = obj
        } else {
            val id = UUID.randomUUID()
            obj.setId(id.toString())
            storage[obj.id()] = obj
        }
        return obj
    }
}
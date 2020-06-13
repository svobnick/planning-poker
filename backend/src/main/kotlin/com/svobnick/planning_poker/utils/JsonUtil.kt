package com.svobnick.planning_poker.utils

import com.fasterxml.jackson.databind.ObjectMapper

object JsonUtil {
    private val objectMapper = ObjectMapper()

    fun <T> toClassFromJson(json: String, clazz: Class<T>) : T {
        return objectMapper.readValue(json, clazz)
    }
}


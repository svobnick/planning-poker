package com.svobnick.planning_poker.controllers

import org.junit.Before
import org.junit.Ignore
import org.junit.Test
import org.junit.runner.RunWith
import org.springframework.beans.factory.annotation.Value
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner

@RunWith(SpringJUnit4ClassRunner::class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class RoomControllerTest {

    private lateinit var controllerUrl: String

    @Value("\${local.server.port}")
    lateinit var port: String

    @Before
    fun init() {
        controllerUrl = "ws://localhost:$port/"
    }

    @Test
    @Ignore
    fun test() {

    }
}
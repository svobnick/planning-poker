package com.svobnick.planning_poker.controllers

import org.junit.Before
import org.junit.Ignore
import org.junit.Test
import org.junit.runner.RunWith
import org.springframework.beans.factory.annotation.Value
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.messaging.converter.MappingJackson2MessageConverter
import org.springframework.messaging.simp.stomp.StompFrameHandler
import org.springframework.messaging.simp.stomp.StompHeaders
import org.springframework.messaging.simp.stomp.StompSessionHandlerAdapter
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner
import org.springframework.web.socket.client.standard.StandardWebSocketClient
import org.springframework.web.socket.messaging.WebSocketStompClient
import org.springframework.web.socket.sockjs.client.SockJsClient
import org.springframework.web.socket.sockjs.client.Transport
import org.springframework.web.socket.sockjs.client.WebSocketTransport
import java.lang.reflect.Type
import java.util.concurrent.CompletableFuture
import java.util.concurrent.TimeUnit


@RunWith(SpringJUnit4ClassRunner::class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class TaskControllersTest {

    @Value("\${local.server.port}")
    lateinit var port: String

    private lateinit var controllerUrl: String
    lateinit var completableFuture: CompletableFuture<Any>

    @Before
    fun init() {
        completableFuture = CompletableFuture()
        controllerUrl = "ws://localhost:$port/task"
    }

    @Test
    @Ignore
    fun testRegistration() {
        val client = WebSocketStompClient(SockJsClient(createTransportClient()))
        client.messageConverter = MappingJackson2MessageConverter()

        val stompSession = client
            .connect(controllerUrl, object : StompSessionHandlerAdapter() {})
            .get(1, TimeUnit.SECONDS)

        // stompSession.subscribe("subscribe endpoint", CreateWebsocketStompFrameHandler(completableFuture))

        // stompSession.send(send endpoint, null)

        // val result = completableFuture?.get(10, TimeUnit.SECONDS)
        // assertNotNull(result)
    }

    private fun createTransportClient(): List<Transport> {
        return listOf(WebSocketTransport(StandardWebSocketClient()))
    }

    private class CreateWebsocketStompFrameHandler(val completableFuture: CompletableFuture<Any>) : StompFrameHandler {
        override fun getPayloadType(stompHeaders: StompHeaders): Type {
            println(stompHeaders.toString())
            return Any::class.java
        }

        override fun handleFrame(stompHeaders: StompHeaders, o: Any) {
            println(o as Any)
            completableFuture.complete(o as Any)
        }
    }
}
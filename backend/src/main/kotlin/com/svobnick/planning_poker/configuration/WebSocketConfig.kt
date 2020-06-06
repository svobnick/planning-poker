package com.svobnick.planning_poker.configuration

import org.springframework.context.annotation.Configuration
import org.springframework.messaging.simp.config.MessageBrokerRegistry
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker
import org.springframework.web.socket.config.annotation.StompEndpointRegistry
import org.springframework.web.socket.config.annotation.WebSocketMessageBrokerConfigurer

@Configuration
@EnableWebSocketMessageBroker
open class WebSocketConfig : WebSocketMessageBrokerConfigurer {

    override fun registerStompEndpoints(registry: StompEndpointRegistry) {
        registry.addEndpoint(
            "/task"
        )
            .setAllowedOrigins("*") // todo replace with localhost on prod
            .withSockJS()
        super.registerStompEndpoints(registry)
    }

    override fun configureMessageBroker(registry: MessageBrokerRegistry) {
        registry.enableSimpleBroker(
            "/task/task-name",
            "/task/votes"
        )
        registry.setApplicationDestinationPrefixes("/task")
        super.configureMessageBroker(registry)
    }
}
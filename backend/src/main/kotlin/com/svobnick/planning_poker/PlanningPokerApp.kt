package com.svobnick.planning_poker

import org.springframework.boot.SpringApplication
import org.springframework.boot.autoconfigure.SpringBootApplication

@SpringBootApplication
open class PlanningPokerApp {

    companion object {
        @JvmStatic
        fun main(args: Array<String>) {
            SpringApplication.run(PlanningPokerApp::class.java)
        }
    }
}
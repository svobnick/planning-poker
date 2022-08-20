description = "planning-poker"

plugins {
    kotlin("jvm") version "1.7.10" apply false
    java
}

subprojects {
    apply {
        plugin("org.jetbrains.kotlin.jvm")
    }

    group = "com.svobnick"
    version = "1.0-SNAPSHOT"

    repositories {
        mavenCentral()
        maven(url = "https://maven.restlet.org")
    }

    val implementation by configurations

    dependencies {
        implementation(kotlin("stdlib-jdk8"))
    }
}
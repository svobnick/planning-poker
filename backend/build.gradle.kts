description = "backend"

val kotlin_version: String by properties
val spring_boot_version: String by properties
val jackson_version: String by properties
val junit_version: String by properties

plugins {
    id("org.springframework.boot").version("2.7.2")
}

dependencies {
    implementation("org.springframework.boot:spring-boot-starter-web:$spring_boot_version")
    implementation("org.springframework.boot:spring-boot-starter-websocket:$spring_boot_version")

    implementation("org.jetbrains.kotlin:kotlin-reflect:$kotlin_version")
    implementation("org.jetbrains.kotlin:kotlin-stdlib-jdk8:$kotlin_version")

    implementation("com.fasterxml.jackson.module:jackson-module-kotlin:$jackson_version")

    testImplementation("org.springframework.boot:spring-boot-starter-test:$spring_boot_version")
    testImplementation("junit:junit:$junit_version")
}
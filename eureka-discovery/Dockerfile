FROM openjdk:20-jdk
WORKDIR /app
COPY target/eureka-discovery.jar .
EXPOSE 8761
CMD ["java", "-jar", "eureka-discovery.jar"]
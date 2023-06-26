FROM openjdk:20-jdk

WORKDIR /app

COPY target/gateway-service.jar .

EXPOSE 8888

CMD ["java", "-jar", "gateway-service.jar"]

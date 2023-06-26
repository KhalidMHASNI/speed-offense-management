# Use a base image
FROM openjdk:20-jdk

# Set the working directory inside the container
WORKDIR /app

# Copy the necessary files to the container
COPY target/immatriculation-service.jar .

# Expose the port on which the service listens
EXPOSE 8081

# Specify the command to run when the container starts
CMD ["java", "-jar", "immatriculation-service.jar"]
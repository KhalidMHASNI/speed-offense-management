# speed-offense-management


    Description: A distributed system for managing and automating speed violation processes using microservices architecture.

    Technologies:
    
      Spring Boot (Java) for microservices development
      Angular for frontend development
      Kycloak for authentication and authorization
      Docker and Docker Compose for containerization and deployment


##  :bookmark_tabs: Table de Contenu : 
1. [Technical Architecture of the project](#technical-architecture-of-the-project)
2. [Global class diagram of the project](#global-class-diagram-of-the-project)
3. [Immatriculation Microservice](#immatriculation-microservice)
    - JPA entities and JpaRepository interface based on Spring data
    - The 4 web services (REST, GraphQL, SOAP, and gRPC)
    - Testing the 4 web services
4. [Infractions Microservice](#infractions-microservice)
5. [Radar Microservice](#radar-microservice)
6. [JAVA client](#java-client)
7. [Technical services](#technical-services)
8. [Front-end application](#front-end-application)
9. [Securing the system](#securing-the-system)
10. [Docker deployment](#docker-deployment)

## Architecture Technique du projet

![image(7)](https://github.com/KhalidMHASNI/speed-offense-management/assets/82038554/f97d13f8-604c-4b09-979d-fa0a1b493be9)

## Diagramme de classe global du projet

![image(8)](https://github.com/KhalidMHASNI/speed-offense-management/assets/82038554/d92280a1-5615-4121-8058-1fc16d38ca0c)


## Immatriculation Microservice

### entitée JPA et interface JpaRepository :

| JPA entitiée | interface JpaRepository|
| --- | --- |
| ![image(9)](https://github.com/KhalidMHASNI/speed-offense-management/assets/82038554/76130f37-2106-4b6b-a20b-9b214cc8d023)| ![image(10)](https://github.com/KhalidMHASNI/speed-offense-management/assets/82038554/d95aae9a-1ba9-4018-b2ce-408f37b68cb2) |

### Les 4 web services (REST, GraphQL, SOAP, and gRPC)

| REST | GraphQL | SOAP | gRPC |
| --- | --- | --- | --- |
| ![image(11)](https://github.com/KhalidMHASNI/speed-offense-management/assets/82038554/62d3923b-006d-45f0-982f-0deabedf0716)| ![image(12)](https://github.com/KhalidMHASNI/speed-offense-management/assets/82038554/43ba853a-3544-4dad-8556-b01f572dc84c) | ![image(13)](https://github.com/KhalidMHASNI/speed-offense-management/assets/82038554/fd18dd5b-de80-40c2-a205-c6edd2cb422a) | ![image(14)](https://github.com/KhalidMHASNI/speed-offense-management/assets/82038554/c43de2c5-6456-4758-bbe1-e5a2b6192dc1) |

### Testing the 4 web services

#### Testing the REST web service using Postman

| List of all owners | Save new owner |
| --- | --- |
| ![listofAllOwnersPostman](https://github.com/oumaimabenaboud/Speed-Infractions-Distributed-System/assets/120368654/871ef92b-c47f-4898-a869-de28b51d9fb8) | ![saveNewOwnerPostman](https://github.com/oumaimabenaboud/Speed-Infractions-Distributed-System/assets/120368654/36e78218-c46d-4171-b597-1b80553c8e06) |

#### Testing the GraphQL web service using Graphiql

| List of all owners | Save new owner |
| --- | --- |
| ![GraphQLListofAllOwners](https://github.com/oumaimabenaboud/Speed-Infractions-Distributed-System/assets/120368654/7880e62f-5a5c-4be0-8453-1f30ab7cfc7f) | ![saveNewOwner](https://github.com/oumaimabenaboud/Speed-Infractions-Distributed-System/assets/120368654/cd46556d-6a70-490c-80c9-db140edd3442) |

#### Testing the SOAP web service using SOAPUI

| List of all owners | Save new vehicle |
| --- | --- |
| ![ListOfAllOwners](https://github.com/oumaimabenaboud/Speed-Infractions-Distributed-System/assets/120368654/42c56a8c-cfd9-424b-9998-67eb79d4b7e1) | ![saveNewVehicle](https://github.com/oumaimabenaboud/Speed-Infractions-Distributed-System/assets/120368654/96f2272e-b181-4d70-89c9-987632c918b4) |

#### Testing the gRPC web service using BloomRPC

| Update vehicle | Update Owner |
| --- | --- |
| ![updateVehicle](https://github.com/oumaimabenaboud/Speed-Infractions-Distributed-System/assets/120368654/8292a976-9761-4033-b974-5c87cdaa3e65) | ![updateowner](https://github.com/oumaimabenaboud/Speed-Infractions-Distributed-System/assets/120368654/6b0589e6-d3be-4c64-a367-28face6be544) |

## Infractions Microservice

| Infractions Microservice | List of all infractions using Postman | Add new infraction using Postman |
| --- | --- | --- |
| ![microserviceInfraction](https://github.com/oumaimabenaboud/Speed-Infractions-Distributed-System/assets/120368654/325a4210-af61-4199-a98a-11cbf7f38b6e) | ![ListofAllInfractions](https://github.com/oumaimabenaboud/Speed-Infractions-Distributed-System/assets/120368654/a9c0e55c-cbeb-48b2-b176-8039afebc676) | ![addnewInfraction](https://github.com/oumaimabenaboud/Speed-Infractions-Distributed-System/assets/120368654/e1625366-af97-46f4-89ce-27fd60633672) |

## Radar Microservice

| List of all infractions including the vehicles that exceeded the speed limit and their respective owners |
| --- |
| ![microserviceRadar](https://github.com/oumaimabenaboud/Speed-Infractions-Distributed-System/assets/120368654/7e6bcd05-f244-465b-b772-e470a4069b60) |

## JAVA client

JAVA client that simulates a radar that randomly generates speeding infractions and sends them via GRPC to the Radar service.

![ClientJavaGrpc](https://github.com/oumaimabenaboud/Speed-Infractions-Distributed-System/assets/120368654/217ba41e-5cb3-4c42-9cbf-29e86b466dc2)

## Technical services

The technical services of the microservice architecture (Gateway, Eureka Discovery service).

![eureka](https://github.com/oumaimabenaboud/Speed-Infractions-Distributed-System/assets/120368654/03aa1160-a0b2-4587-9323-2d730043e44a)

## Front-end application

Front-end application with Angular.

| List of Radars | Add new Radar | Infractions detected by the Radar | Infraction detail |
| --- | --- | --- | --- |
| ![ListofRadars](https://github.com/oumaimabenaboud/Speed-Infractions-Distributed-System/assets/120368654/c4f64def-e555-4517-8894-e54085ba8fc8) | ![addNewRadar](https://github.com/oumaimabenaboud/Speed-Infractions-Distributed-System/assets/120368654/55a4660b-ec63-496a-a3bf-845b9753c4e7) | ![InfractionsdetectedofRadar](https://github.com/oumaimabenaboud/Speed-Infractions-Distributed-System/assets/120368654/292aaca3-9cc3-4ae8-9c99-ce50ee7c9bb3) | ![Infractiondetail](https://github.com/oumaimabenaboud/Speed-Infractions-Distributed-System/assets/120368654/24384bda-35ca-454c-a5c8-193195c10200) |

| List of Infractions | Add new Infraction | Infraction detail | Delete Infraction |
| --- | --- | --- | --- |
| ![listofInfractions](https://github.com/oumaimabenaboud/Speed-Infractions-Distributed-System/assets/120368654/11db2002-60bb-488f-8c33-3e40137a12bb) | ![addNewInfractionAngular](https://github.com/oumaimabenaboud/Speed-Infractions-Distributed-System/assets/120368654/25609132-7331-4e93-907d-48c53f7b0e3b) | ![DetailsInfraction](https://github.com/oumaimabenaboud/Speed-Infractions-Distributed-System/assets/120368654/6204e786-eb05-48ce-9c7a-24773edd3871) | ![image](https://github.com/oumaimabenaboud/Speed-Infractions-Distributed-System/assets/120368654/d3d21335-4615-43c9-b801-202d86c5d704)


| List of Vehicles | Add new Vehicle | Vehicle's owner detail |
| --- | --- | --- |
| ![listOfVehicles](https://github.com/oumaimabenaboud/Speed-Infractions-Distributed-System/assets/120368654/e3bafea3-f226-444b-a19b-95f4ab6be27a) | ![AddNewVehicle](https://github.com/oumaimabenaboud/Speed-Infractions-Distributed-System/assets/120368654/9fb8adca-6d9d-408b-9837-5b1bbea2c657) | ![VehiclesOwner](https://github.com/oumaimabenaboud/Speed-Infractions-Distributed-System/assets/120368654/83fca0b2-ba7d-4343-8c84-1c88d3b45815) |

## Securing the system

Securing the system with the Keycloak authentication system.



## Docker deployment

The `docker-compose.yml` script to deploy the distributed system in Docker containers.


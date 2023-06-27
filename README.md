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

### Tester les 4 web services

#### Tester le REST web service avec Postman

| Liste des tous les propriétaires | Enregistrer un nouveau propriétaire |
| --- | --- |
| ![image](https://github.com/KhalidMHASNI/speed-offense-management/assets/82038554/e0d44ef4-507e-442f-b098-5e00c8e3aba4)| ![image](https://github.com/KhalidMHASNI/speed-offense-management/assets/82038554/5339d496-49a4-4b3d-9609-908b96e803fd) |

#### Tester le GraphQL web service avec Graphiql

| Liste des tous les propriétaires | Enregistrer un nouveau propriétaire |
| --- | --- |
| ![image](https://github.com/KhalidMHASNI/speed-offense-management/assets/82038554/0da66dd1-7625-4acf-8f94-dec36c0bac65) | ![image](https://github.com/KhalidMHASNI/speed-offense-management/assets/82038554/5f326942-909f-4a05-a8c0-4ae46328077d) |

#### Tester le SOAP web service avec SOAPUI

| Affichage d'un prpriétaire avec son Id | Enregistrer une nouvelle vehicule |
| --- | --- |
| ![image](https://github.com/KhalidMHASNI/speed-offense-management/assets/82038554/77db3010-b189-4004-9b0a-a1f0f25877d5) | ![image](https://github.com/KhalidMHASNI/speed-offense-management/assets/82038554/844540ea-e55f-4c41-b187-bd52eab307d6) |

#### Tester le gRPC web service avec BloomRPC

| Mettre à jour d'une véhicule | Mettre à jour d'un propriétaire |
| --- | --- |
| ![image](https://github.com/KhalidMHASNI/speed-offense-management/assets/82038554/71365f7f-0bf6-49d1-b80e-2a17036c691b) | ![image](https://github.com/KhalidMHASNI/speed-offense-management/assets/82038554/2f981a20-795b-44df-b9a0-45558919f71a) |

## Infractions Microservice

| Infractions Microservice | List of all infractions using Postman | Add new infraction using Postman |
| --- | --- | --- |
| ![image](https://github.com/KhalidMHASNI/speed-offense-management/assets/82038554/0db1b01c-7c90-4e38-9978-3afbe196e8d6) | ![image](https://github.com/KhalidMHASNI/speed-offense-management/assets/82038554/c0b81269-9b01-4d54-832a-bd2fbfc37f0c) | ![image](https://github.com/KhalidMHASNI/speed-offense-management/assets/82038554/1cbfd629-b028-4dcd-b4ca-ff7715f6d0f5) |

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


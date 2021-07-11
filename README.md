# Node Hexagonal Architecture Example

A simple API with hexagonal architecture.

## built with
- express
- ramda
- eslint
- jest

## other examples

- [nubank's example with clojure](github.com/nubank/basic-microservice-example)
- [Hexagonal architecture – Alistair Cockburn](alistair.cockburn.us/hexagonal-architecture/)

## architecture and fold structure

### logic

business logic with pure functions

### adapters

converts internal data to external and vice-versa

### ports

communicates with external sources (other api, database)

in this example the in memory database is used as an example for this communication

### controllers

uses the logic, adapters and ports to return the desired result to the caller

## running

### start server

- `npm i`
- `npm start`

### running tests

- `npm test`

## api

- `curl http://localhost:6123/heroes`

- `curl -d '{"name":"hero name","level": 1}' -H "Content-Type: application/json" -X POST http://localhost:6123/heroes`

---
title: EventSourcing
experience: 0
tags: frontend, frameworks
---

# Event Sourcing

Event Sourcing ensures that all changes to application state are stored as a
sequence of events. Not just can we query these events, we can also use the
event log to reconstruct past states, and as a foundation to automatically
adjust the state to cope with retroactive changes.

I stedet for å lagre den nåværende tilstanden til systemet, lagres alle
endringer som har skjedd i systemet som en sekvens av events. Disse eventene kan
så reproduseres og gjenopprette systemets tilstand til et hvilket som helst
tidspunkt i fortiden. Det er et relativt “gammelt” konsept men har ingen
erfaring med det så tenker det er greit å sjekke det ut i alle fall. Enten da
sammen med NATS eller kanskje [Marten](https://martendb.io/).

---

- [Article](https://martinfowler.com/eaaDev/EventSourcing.html)

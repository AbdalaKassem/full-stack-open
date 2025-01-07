```mermaid
sequenceDiagram
participant browser
participant server

    browser->>server: POST /exampleapp/new_note_spa
    activate server
    server->>browser: 201 Created (note successfully added)
    deactivate server
```

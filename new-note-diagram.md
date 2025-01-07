sequenceDiagram
participant browser
participant server

    browser->>server: POST /exampleapp/new_note
    activate server
    server->>browser: 302 Found (redirect to /exampleapp/notes)
    deactivate server

    Note right of browser: Server acknowledges the note creation and redirects to the notes page

    browser->>server: GET /exampleapp/notes
    activate server
    server-->>browser: HTML document (new note added)
    deactivate server

    Note right of browser: The new note is included in the HTML page

    browser->>server: GET /exampleapp/main.css
    activate server
    server-->>browser: CSS file
    deactivate server

    browser->>server: GET /exampleapp/main.js
    activate server
    server-->>browser: JavaScript file
    deactivate server

    Note right of browser: The browser executes JavaScript to fetch and display updated notes

    browser->>server: GET /exampleapp/data.json
    activate server
    server-->>browser: JSON data (including new note)
    deactivate server

    Note right of browser: JSON data is processed and rendered dynamically on the page

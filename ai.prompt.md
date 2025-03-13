# Main overview 
This project is all `TS` using `Deno` as a build system and run time for both the backend and frontend.
This is a mono repo. It uses `Deno` workspaces to manage the dependencies between the modules.

## Project Overview.

This project is split in to 3 core modules.
- lib - contains library code shared between the other modules.
- services - contains the backend docker services that run the backend logic 
- web - contains the frontend web application that interacts with the backend services.

## Web Module
- The web module is written in React. It uses `Vite` as the build system.
- The web module is a SPA that interacts with the backend services to display the data.
- The web module uses PrimeReact as the component library.
- The web module uses TailwindCSS for styling.

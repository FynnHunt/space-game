# STQS

## Requirements

NodeJS 18+
NPM

## Running

`npm ci`
`npm run dev`
See `package.json` for more details on available scripts.

## Exercise

Run the project (or read `./src/App.tsx`) for details of the exercise.

## Features implemented

With the limited time I've had over the weekend I was able to implement the features below. With more time I'd love to implement further features as I found this project very enjoyable.

- View and accept contracts
- View ships
- View waypoints from a ship
- View ships for sale at a shipyard
- Purchase ships
- Launch ship in to orbit
- Send ship to a waypoint
- Dock ship at a waypoint
- Persisting data between sessions on same device
- Deployed to Github pages using the gh pages package (404 error needs debugging)

## Improvements

Due to time limitations there are many changes and improvements I'd like to make to this project.
I've listed a few of these changes below:

- Implement tests
- I'm storing the agent token in local storage and retrieving it inside every component that requires it to avoid prop drilling. I believe a better method of doing this would be to use react context (useContext hook).
  With more time I'd implement this.
- Defensive coding e.g. error checking on all requests in components
- Type more things
- Improve UI. The UI is incredibly cluttered and ugly. If i had more time for this project I'd put a lot more work into making it look nice!
- Implement a data refresher for tracking the nav status of ships. Websockets would be nice if the API supported it. Alternatively when a ship is in transit the status of the ship could be retrieved every x seconds to
  keep the ship status updated on screen.
- Refactor some reused components and functions in to their own files.
- Replace the component library I chose (grommet) as there appears to be a large amount of warnings in the browser coming from components in the component library.
  There was also a number of errors when trying to use certain components in the library which limited my use.
- Implement more game features. I only got so far with the quick start tasks as I wasted a lot of time displaying all of the agents data across different views (contracts / fleet etc).
- Fix 404 error with Github pages deployment

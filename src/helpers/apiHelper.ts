import { AgentData, Contract, Ship, Shipyard, Waypoint } from "../schema/types";

interface AgentResponse {
  data: AgentData;
}

// Fetches the users agent given the access token
export const fetchAgent = (token: string): Promise<AgentData> =>
  fetch("https://api.spacetraders.io/v2/my/agent", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json().then((res: AgentResponse) => res.data))
    .catch((err) => {
      console.error("Error in fetch agent request", err);
      return err;
    });

interface FleetResponse {
  data: Ship[];
}

// Fetches the agents fleet given the access token
export const fetchFleet = (token: string): Promise<Ship[]> =>
  fetch("https://api.spacetraders.io/v2/my/ships", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json().then((res: FleetResponse) => res.data))
    .catch((err) => {
      console.error("Error in fetch fleet request", err);
      return err;
    });

interface ContractsResponse {
  data: Contract[];
}

// Fetches the agents contracts given the access token
export const fetchContracts = (token: string): Promise<Contract[]> =>
  fetch("https://api.spacetraders.io/v2/my/contracts", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json().then((res: ContractsResponse) => res.data))
    .catch((err) => {
      console.error("Error in fetch contracts request", err);
      return err;
    });

interface WaypointsReponse {
  data: Waypoint[];
}

// Fetches all waypoints in a system
export const fetchWaypoints = (
  token: string,
  systemSymbol: string
): Promise<Waypoint[]> =>
  fetch(`https://api.spacetraders.io/v2/systems/${systemSymbol}/waypoints`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json().then((res: WaypointsReponse) => res.data))
    .catch((err) => {
      console.error("Error in fetch waypoints", err);
      return err;
    });

interface ShipyardResponse {
  data: Shipyard;
}

// Fetches shipyard data
export const fetchShipyard = (
  token: string,
  systemSymbol: string,
  shipyardSymbol: string
): Promise<Shipyard> =>
  fetch(
    `https://api.spacetraders.io/v2/systems/${systemSymbol}/waypoints/${shipyardSymbol}/shipyard`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  )
    .then((res) => res.json().then((res: ShipyardResponse) => res.data))
    .catch((err) => {
      console.error("Error in fetch shipyard", err);
      return err;
    });

// Accepts a contract
export const acceptContract = (
  token: string,
  contractId: string
): Promise<Contract[]> =>
  fetch(`https://api.spacetraders.io/v2/my/contracts/${contractId}/accept`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json().then((res: ContractsResponse) => res.data))
    .catch((err) => {
      console.error("Error in fetch contracts request", err);
      return err;
    });

// Buy a ship
// TODO: Type the response for this request
export const buyShip = (
  token: string,
  shipType: string,
  waypointSymbol: string
) =>
  fetch(`https://api.spacetraders.io/v2/my/ships`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      shipType,
      waypointSymbol,
    }),
  })
    .then((res) => res.json().then((res) => res.data))
    .catch((err) => {
      console.error("Error in buy ship request", err);
      return err;
    });

// Launches a ship in to orbit
// TODO: Type the response for this request
export const launchShipIntoOrbit = (token: string, shipSymbol: string) =>
  fetch(`https://api.spacetraders.io/v2/my/ships/${shipSymbol}/orbit`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json().then((res) => res.data))
    .catch((err) => {
      console.error("Error in launch ship into orbit request", err);
      return err;
    });

// Sends the ship to a waypoint
// TODO: Type the response for this request
export const sendShipToWaypoint = (
  token: string,
  shipSymbol: string,
  waypointSymbol: string
) =>
  fetch(`https://api.spacetraders.io/v2/my/ships/${shipSymbol}/navigate`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      waypointSymbol,
    }),
  })
    .then((res) => res.json().then((res) => res.data))
    .catch((err) => {
      console.error("Error in send ship to waypoint request", err);
      return err;
    });

// Sends the ship to a waypoint
// TODO: Type the response for this request
export const dockShip = (token: string, shipSymbol: string) =>
  fetch(`https://api.spacetraders.io/v2/my/ships/${shipSymbol}/dock`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json().then((res) => res.data))
    .catch((err) => {
      console.error("Error in dock ship request", err);
      return err;
    });

// Register a new agent
// TODO: Type the response for this request
export const registerAgent = (symbol: string, faction: string) =>
  fetch("https://api.spacetraders.io/v2/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      symbol,
      faction,
    }),
  });

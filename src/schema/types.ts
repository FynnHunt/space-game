// AGENT

export interface Agent {
  accountId: string;
  symbol: string;
  headquarters: string;
  credits: number;
  startingFaction: string; // TODO: type this in to the possible factions, ag "COSMIC" | "OTHER-FACTION" | ...
}

// WAYPOINTS

export interface Waypoint {
  symbol: string;
  type: string;
  systemSymbol: string;
  x: 0;
  y: 0;
  orbitals: [
    {
      symbol: string;
    }
  ];
  faction: {
    symbol: string;
  };
  traits: [
    {
      symbol: string;
      name: string;
      description: string;
    }
  ];
  chart: {
    waypointSymbol: string;
    submittedBy: string;
    submittedOn: string | Date;
  };
}

// CONTRACTS

interface ContractPayment {
  onAccepted: number;
  onFulfilled: number;
}

interface ContractDeliver {
  tradeSymbol: string;
  destinationSymbol: string;
  unitsRequired: number;
  unitsFulfilled: number;
}

interface ContractTerms {
  deadline: string | Date;
  payment: ContractPayment;
  deliver: ContractDeliver[];
}

export interface Contract {
  id: string;
  factionSymbol: string;
  type: string;
  terms: ContractTerms;
  accepted: boolean;
  fulfilled: boolean;
  expiration: string | Date;
  deadlineToAccept: string | Date;
}

// FACTIONS

interface FactionTrait {
  symbol: string;
  name: string;
  description: string;
}

export interface Faction {
  symbol: string;
  name: string;
  description: string;
  headquarters: string;
  traits: FactionTrait[];
  isRecruiting: boolean;
}

// SHIP

interface ShipNavRouteLocation {
  symbol: string;
  type: string;
  systemSymbol: string;
  x: number;
  y: number;
}

interface ShipNavRoute {
  departure: ShipNavRouteLocation;
  destination: ShipNavRouteLocation;
  arrival: string | Date;
  departureTime: string | Date;
}

interface ShipNav {
  systemSymbol: string;
  waypointSymbol: string;
  route: ShipNavRoute;
  status: string; // TODO: type this in to possible statuses
  flightMode: string; // TODO: type this in to possible flight modes
}

interface ShipCrew {
  current: number;
  capacity: number;
  required: number;
  rotation: string; // TODO: type this in to possible values
  morale: number;
  wages: number;
}

interface ShipFuelConsumed {
  amount: number;
  timestamp: string | Date;
}

interface ShipFuel {
  current: number;
  capacity: number;
  consumed: ShipFuelConsumed;
}

interface ShipRequirements {
  power: number;
  crew: number;
}

interface ShipFrame {
  symbol: string;
  name: string;
  description: string;
  moduleSlots: number;
  mountingPoints: number;
  fuelCapacity: number;
  condition: number;
  requirements: ShipRequirements;
}

interface ShipReactor {
  symbol: string;
  name: string;
  description: string;
  condition: number;
  powerOutput: number;
  requirements: {
    crew: number;
  };
}

interface ShipModuleRequirements extends ShipRequirements {
  slots: number;
}

interface ShipModule {
  symbol: string;
  name: string;
  description: string;
  capacity?: number;
  range?: number;
  requirements: ShipModuleRequirements;
}

interface ShipEngine {
  symbol: string;
  name: string;
  description: string;
  condition: number;
  speed: number;
  requirements: ShipRequirements;
}

interface ShipMount {
  symbol: string;
  name: string;
  description: string;
  strength: number;
  deposits?: string[];
  requirements: ShipRequirements;
}

interface ShipRegistration {
  name: string;
  factionSymbol: string; // TODO: type this to possible factions
  role: string; // TODO: type this to possible roles
}

interface ShipCargo {
  capacity: number;
  units: number;
  inventory: string[]; // TODO: not sure of type on this, verify
}

export interface Ship {
  symbol: string;
  nav: ShipNav;
  crew: ShipCrew;
  fuel: ShipFuel;
  frame: ShipFrame;
  reactor: ShipReactor;
  engine: ShipEngine;
  modules: ShipModule[];
  mounts: ShipMount[];
  registration: ShipRegistration;
  cargo: ShipCargo;
}

// SHIPYARDS

interface ShipType {
  type: string;
}

interface ShipyardTransaction {
  waypointSymbol: string;
  shipSymbol: string;
  price: number;
  agentSymbol: string;
  timestamp: string | Date;
}

export interface ShipyardShip {
  type: string;
  name: string;
  description: string;
  purchasePrice: number;
  frame: ShipFrame;
  reactor: ShipReactor; // TODO: type this
  engine: ShipEngine; // TODO: type this
  modules: ShipModule[];
  mounts: ShipMount[];
}

export interface Shipyard {
  symbol: string;
  shipTypes: ShipType[];
  transactions: ShipyardTransaction[];
  ships: ShipyardShip[];
}

// Agent data

export interface CreateAgentData {
  token: string;
  agent: Agent;
  contract: Contract;
  faction: Faction;
  ship: Ship;
}

export interface AgentData {
  accountId: string;
  symbol: string;
  headquarters: string;
  credits: number;
  startingFaction: string;
  shipCount: number;
}

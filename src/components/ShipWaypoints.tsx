import { useState, useEffect } from "react";
import styled from "styled-components";
import { Ship, Waypoint } from "../schema/types";
import { fetchWaypoints, sendShipToWaypoint } from "../helpers/apiHelper";
import { getAgentToken } from "../helpers/tokenHelper";
import { Button } from "grommet";
import { spacing } from "../helpers/spacing";
import ShipyardSection from "./ShipyardSection";

const WaypointContainer = styled.div`
  padding: ${spacing.medium};
  border: solid 2px green;
  margin: ${spacing.large} 0;
`;

const WaypointInfo = ({
  waypoint,
  setRefreshFleet,
  ship,
  token,
}: {
  waypoint: Waypoint;
  setRefreshFleet: (val: string) => void;
  ship: Ship;
  token: string;
}) => (
  <WaypointContainer>
    <h3>Waypoint {waypoint.symbol}</h3>
    <p>
      <b>Type:</b> {waypoint.type}
    </p>
    <p>
      <b>Position:</b> X: {waypoint.x}, Y: {waypoint.y}
    </p>
    <b>Traits:</b>{" "}
    {waypoint.traits.map((trait, idx) => (
      <div key={idx}>
        <p>
          <b>{trait.name}:</b> {trait.description}
        </p>
        {trait.name === "Shipyard" && (
          <ShipyardSection
            setRefreshFleet={setRefreshFleet}
            waypoint={waypoint}
          />
        )}
      </div>
    ))}
    {/* TODO: Add more waypoint info */}
    {ship.nav.status === "DOCKED" && (
      <p style={{ color: "red" }}>
        <b>Note:</b> To travel to this waypoint you must first launch your ship
        into orbit.
      </p>
    )}
    {ship.nav.status === "IN_TRANSIT" && (
      <p style={{ color: "red" }}>
        <b>Note:</b> Ship is currently in transit.
      </p>
    )}
    {ship.nav.status === "IN_ORBIT" && (
      <Button
        primary
        label="Travel to waypoint"
        onClick={async () => {
          await sendShipToWaypoint(token, ship.symbol, waypoint.symbol);
          setRefreshFleet(`Sending ${ship.symbol} to ${waypoint.symbol}`);
        }}
      />
    )}
  </WaypointContainer>
);

const ShipWaypoints = ({
  ship,
  setRefreshFleet,
}: {
  ship: Ship;
  setRefreshFleet: (val: string) => void;
}) => {
  const [waypoints, setWaypoints] = useState<Waypoint[]>();
  const [token, setToken] = useState("");

  useEffect(() => {
    setToken(getAgentToken());
  }, []);

  const scanForWaypoints = async () => {
    const waypointsRes = await fetchWaypoints(token, ship.nav.systemSymbol);
    // TODO: Add some error checking here for the case the waypoints request fails
    setWaypoints(waypointsRes);
  };

  return (
    <>
      <Button
        primary
        label="Scan for waypoints"
        onClick={() => scanForWaypoints()}
      />
      {waypoints && waypoints.length > 0 && (
        <>
          <Button
            primary
            label="Hide waypoints"
            onClick={() => setWaypoints([])}
            style={{ marginLeft: spacing.medium }}
          />
          {waypoints.map((waypoint, idx) => (
            <WaypointInfo
              setRefreshFleet={setRefreshFleet}
              key={idx}
              waypoint={waypoint}
              ship={ship}
              token={token}
            />
          ))}
        </>
      )}
    </>
  );
};

export default ShipWaypoints;

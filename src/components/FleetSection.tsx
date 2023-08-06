import { useState, useEffect } from "react";
import styled from "styled-components";
import { Accordion, AccordionPanel, Box } from "grommet";
import { Ship } from "../schema/types";
import ShipWaypoints from "./ShipWaypoints";
import { spacing } from "../helpers/spacing";
import { fetchFleet } from "../helpers/apiHelper";
import { getAgentToken } from "../helpers/tokenHelper";
import OrbitShip from "./OrbitShip";

const ShipWrapper = styled.div`
  padding: ${spacing.large};
  border: solid 2px;
  margin-bottom: ${spacing.large};
`;

const ShipInfo = ({
  ship,
  setRefreshFleet,
}: {
  ship: Ship;
  setRefreshFleet: (val: string) => void;
}) => {
  return (
    <ShipWrapper>
      <h3>{ship.symbol}</h3>
      <p>
        <b>Name:</b> {ship.frame.name}
      </p>
      <p>
        <b>Description:</b> {ship.frame.description}
      </p>
      <p>
        <b>Condition:</b> {ship.frame.condition}
      </p>
      <p>
        <b>Current location:</b> System: {ship.nav.systemSymbol}, Waypoint:{" "}
        {ship.nav.waypointSymbol}
      </p>
      <p>
        <b>Status:</b> {ship.nav.status}
      </p>
      {/* TODO: Add more frame info */}
      <Accordion>
        <AccordionPanel label="Cargo">
          <Box pad="medium">
            <p>
              <b>Capacity:</b> {ship.cargo.capacity}
            </p>
            <p>
              <b>Inventory:</b>{" "}
              {ship.cargo.inventory.length > 0
                ? ship.cargo.inventory.join(",")
                : "Empty"}
            </p>
            <p>
              <b>Units:</b> {ship.cargo.units}
            </p>
          </Box>
        </AccordionPanel>
        {/* TODO: Add more ship info */}
      </Accordion>
      <p>TODO: Add more ship info to this component</p>
      <h3>Ship control panel</h3>
      <OrbitShip setRefreshFleet={setRefreshFleet} ship={ship} />
      <ShipWaypoints setRefreshFleet={setRefreshFleet} ship={ship} />
    </ShipWrapper>
  );
};

const FleetSection = () => {
  const [fleet, setFleet] = useState<Ship[]>();
  const [token, setToken] = useState("");
  const [refreshFleet, setRefreshFleet] = useState("");

  useEffect(() => {
    setToken(getAgentToken());
  }, []);

  useEffect(() => {
    const getFleet = async () => {
      const fleetRes = await fetchFleet(token);
      if (fleetRes) {
        setFleet(fleetRes);
      }
    };
    getFleet();
  }, [token, refreshFleet]);

  return (
    <>
      <h2>Fleet</h2>
      {fleet &&
        fleet.map((ship, idx) => (
          <ShipInfo key={idx} ship={ship} setRefreshFleet={setRefreshFleet} />
        ))}
      <p>TODO: Implement more fleet info</p>
    </>
  );
};

export default FleetSection;

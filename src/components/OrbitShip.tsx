import { useEffect, useState } from "react";
import { Button } from "grommet";
import styled from "styled-components";
import { Ship } from "../schema/types";
import { spacing } from "../helpers/spacing";
import { dockShip, launchShipIntoOrbit } from "../helpers/apiHelper";
import { getAgentToken } from "../helpers/tokenHelper";

const OrbitShipContainer = styled.div`
  margin: ${spacing.large} 0;
`;

const OrbitShip = ({
  ship,
  setRefreshFleet,
}: {
  ship: Ship;
  setRefreshFleet: (val: string) => void;
}) => {
  const [token, setToken] = useState("");

  useEffect(() => {
    setToken(getAgentToken());
  }, []);

  return (
    <OrbitShipContainer>
      {ship.nav.status === "DOCKED" && (
        <Button
          primary
          label="Launch into orbit"
          onClick={async () => {
            // TODO: Add error checking on request here
            await launchShipIntoOrbit(token, ship.symbol);
            setRefreshFleet(`Launch ${ship.symbol} into orbit`);
          }}
        />
      )}
      {ship.nav.status === "IN_ORBIT" && (
        <Button
          primary
          label="Dock ship"
          onClick={async () => {
            // TODO: Add error checking on request here
            await dockShip(token, ship.symbol);
            setRefreshFleet(`Docking ${ship.symbol}`);
          }}
        />
      )}
    </OrbitShipContainer>
  );
};

export default OrbitShip;

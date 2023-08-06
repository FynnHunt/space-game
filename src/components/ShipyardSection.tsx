import { useEffect, useState } from "react";
import { Button } from "grommet";
import { Waypoint, Shipyard } from "../schema/types";
import { getAgentToken } from "../helpers/tokenHelper";
import { buyShip, fetchAgent, fetchShipyard } from "../helpers/apiHelper";
import { Box } from "./Box";

const ShipyardSection = ({
  waypoint,
  setRefreshFleet,
}: {
  waypoint: Waypoint;
  setRefreshFleet: (val: string) => void;
}) => {
  const [shipyard, setShipyard] = useState<Shipyard>();
  const [token, setToken] = useState("");
  const [showShips, setShowShips] = useState(false);
  // const [agentData, setAgentData] = useState<AgentData>();

  useEffect(() => {
    setToken(getAgentToken());
  }, []);

  const getShipyard = async () => {
    // TODO: Add error checking to this request
    const shipyardRes = await fetchShipyard(
      token,
      waypoint.systemSymbol,
      waypoint.symbol
    );

    setShipyard(shipyardRes);
  };

  return (
    <>
      <Button
        primary
        label={showShips ? "Hide ships" : "Show ships"}
        onClick={() => {
          if (!showShips && !shipyard) {
            getShipyard();
          }
          setShowShips(!showShips);
        }}
      />
      {/* TODO: With more time it would be nice to have a shop modal that pops up instead of cramming everything inside the ship / waypoint component */}
      {shipyard && showShips && (
        <Box colour="purple">
          <h3>Shipyard {shipyard.symbol}</h3>
          <p>
            <b>Ship types for sale:</b>{" "}
            {shipyard.shipTypes.map((type) => type.type).join(", ")}
          </p>
          <b>Ships:</b>{" "}
          {shipyard.ships.map((ship) => (
            <Box colour="white">
              <p>
                <b>Name:</b> {ship.name}
              </p>
              <p>
                <b>Type:</b> {ship.type}
              </p>
              <p>
                <b>Price:</b> {ship.purchasePrice}
              </p>
              <p>TODO: Add more info to these ships</p>
              <Button
                primary
                label="Buy"
                onClick={async () => {
                  const agentData = await fetchAgent(token);
                  if (agentData.credits < ship.purchasePrice) {
                    // TODO: Turn these ugly alerts in to nice looking error modals
                    alert("You do not have enough credits to buy this ship");
                  } else {
                    // TODO: Error check and check response data to see if ship purchase was successful
                    await buyShip(token, ship.type, waypoint.symbol);
                    alert("Ship purchased. You can now view it in your fleet.");
                    setRefreshFleet(`Bought ${ship.name}`);
                  }
                }}
              />
            </Box>
          ))}
        </Box>
      )}
    </>
  );
};

export default ShipyardSection;

import { Box, Avatar, Button } from "grommet";
import { useState } from "react";
import styled from "styled-components";
import { AgentData } from "../schema/types";
import spaceman from "../images/spaceman.png";
import AgentInfo from "./AgentInfo";
import FleetSection from "./FleetSection";
import ContractsSection from "./ContractsSection";
import PageContent from "./PageContent";
import { spacing } from "../helpers/spacing";

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

interface AgentMenuProps {
  agentData: AgentData;
}

const AgentMenu = ({ agentData }: AgentMenuProps) => {
  const [showContracts, setShowContracts] = useState(false);
  const [showFactions, setShowFactions] = useState(false);
  const [showFleet, setShowFleet] = useState(false);
  const [showSystems, setShowSystems] = useState(false);

  const resetAll = () => {
    setShowContracts(false);
    setShowFactions(false);
    setShowFleet(false);
    setShowSystems(false);
  };

  return (
    <PageContent>
      <h1 style={{ paddingBottom: spacing.large }}>Agent</h1>
      <Box direction="row" gap="small">
        <Avatar src={spaceman} />
      </Box>
      <AgentInfo label="Account ID" value={agentData.accountId} />
      <AgentInfo label="Call sign" value={agentData.symbol} />
      <AgentInfo label="Credits" value={agentData.credits.toString()} />
      <AgentInfo label="HQ" value={agentData.headquarters} />
      <AgentInfo label="Faction" value={agentData.startingFaction} />
      <p>Select a ship from your fleet and embark to start exploring space.</p>
      <ButtonContainer>
        <Button
          onClick={() => {
            resetAll();
            setShowFleet(!showFleet);
          }}
          primary={showFleet}
          label="Fleet"
          style={{ color: "white" }}
        />
        <Button
          onClick={() => {
            resetAll();
            setShowContracts(!showContracts);
          }}
          primary={showContracts}
          label="Contracts"
          style={{ color: "white" }}
        />
        <Button
          onClick={() => {
            resetAll();
            setShowFactions(!showFactions);
          }}
          primary={showFactions}
          label="Factions"
          style={{ color: "white" }}
        />
        <Button
          onClick={() => {
            resetAll();
            setShowSystems(!showSystems);
          }}
          primary={showSystems}
          label="Systems"
          style={{ color: "white" }}
        />
      </ButtonContainer>
      {showFleet && <FleetSection />}
      {showContracts && <ContractsSection />}
      {showFactions && <p>TODO: Implement factions component</p>}
      {showSystems && <p>TODO: Implement systems component</p>}
    </PageContent>
  );
};

export default AgentMenu;

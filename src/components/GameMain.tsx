import { useState } from "react";
import AgentMenu from "./AgentMenu";
import NewGame from "./NewGame";
import { AgentData } from "../schema/types";

const GameMain = () => {
  const [agentData, setAgentData] = useState<AgentData>();
  const [token, setToken] = useState("");
  const [showAgentData, setShowAgentData] = useState(false);

  return (
    <>
      {(!agentData || !token) && !showAgentData && (
        <NewGame
          setAgentData={setAgentData}
          setToken={setToken}
          setShowAgentData={setShowAgentData}
        />
      )}
      {agentData && showAgentData && token && (
        <>
          <>
            <AgentMenu agentData={agentData} />
          </>
        </>
      )}
    </>
  );
};

export default GameMain;

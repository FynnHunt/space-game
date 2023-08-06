import { useEffect, useState } from "react";
import { TextInput, Button } from "grommet";
import "../style/Typewriter.css";
import { AgentData } from "../schema/types";
import { fetchAgent, registerAgent } from "../helpers/apiHelper";

/**
 * This component is a basic MVP of part one of the quickstart. It handles registering your agent and receives a token
 * which you will need to use in subsequent calls. Therefore, you might want to refactor or replace this as you move forward.
 */

interface NewGameProps {
  setAgentData: (data: AgentData) => void;
  setToken: (token: string) => void;
  setShowAgentData: (cond: boolean) => void;
}

function NewGame({ setAgentData, setToken, setShowAgentData }: NewGameProps) {
  const [newAgentForm, setNewAgentForm] = useState({
    symbol: "",
    faction: "COSMIC",
  });
  const [existingToken, setExistingToken] = useState("");
  const [createAgentError, setCreateAgentError] = useState("");
  const [loadAgentError, setLoadAgentError] = useState("");
  const [symbolInputError, setSymbolInputError] = useState("");

  useEffect(() => {
    const getAgentData = async (storageToken: string) => {
      // TODO: Add error checking here for returning users
      const agent = await fetchAgent(storageToken);
      if (agent) {
        setAgentData(agent);
        setShowAgentData(true);
      }
    };

    const localStorageAgentToken = window.localStorage.getItem("agent-token");
    if (localStorageAgentToken && typeof localStorageAgentToken === "string") {
      setExistingToken(localStorageAgentToken);
      setToken(localStorageAgentToken);
      getAgentData(localStorageAgentToken);
    }
  }, [existingToken, setToken, setAgentData, setShowAgentData]);

  return (
    <>
      <div className="typewriter">
        <h1>Greetings space explorer.</h1>
      </div>
      {existingToken ? (
        <>
          <p>
            It looks like your adventure has already started. Click the button
            below to resume. Or if you'd like to create a new agent fill in the
            form below.
          </p>
          {loadAgentError && (
            <>
              <p style={{ color: "red" }}>
                There was an error loading your agent:
              </p>
              <p style={{ color: "red" }}>{createAgentError}</p>
            </>
          )}
          <Button
            style={{ float: "right" }}
            label="Load existing agent"
            primary
            onClick={async () => {
              const resp = await fetch(
                "https://api.spacetraders.io/v2/my/agent",
                {
                  method: "GET",
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${existingToken}`,
                  },
                }
              );

              const json = await resp.json();

              if (json.error) {
                setLoadAgentError(json.error.message);
              } else {
                if (resp.ok && json.data.accountId) {
                  setAgentData(json.data);
                  setShowAgentData(true);
                } else {
                  setLoadAgentError("Could not find token on response");
                }
              }
            }}
          />
        </>
      ) : (
        <>
          <p>It looks like you're new here.</p>
          <p>
            To begin your adventure enter your callsign below and your agent
            will be created.
          </p>
          <p>
            Your progress will be saved in local storage, meaning you can return
            to the same game once started as long as you are playing on the same
            device.
          </p>
        </>
      )}
      <h2>Create new agent:</h2>
      <h3>Call sign:</h3>
      <TextInput
        placeholder="Enter call sign"
        value={newAgentForm.symbol}
        onChange={(e) =>
          setNewAgentForm({ ...newAgentForm, symbol: e.currentTarget.value })
        }
      />
      {symbolInputError && <p style={{ color: "red" }}>{symbolInputError}</p>}
      <h3>Faction:</h3>
      <TextInput
        placeholder=""
        value={newAgentForm.faction}
        onChange={(e) =>
          setNewAgentForm({ ...newAgentForm, faction: e.currentTarget.value })
        }
      />
      <br></br>
      {createAgentError && (
        <>
          <p style={{ color: "red" }}>
            There was an error creating your agent:
          </p>
          <p style={{ color: "red" }}>{createAgentError}</p>
        </>
      )}
      <Button
        style={{ float: "right" }}
        label="Begin your journey"
        primary
        onClick={async () => {
          if (!newAgentForm.symbol) {
            return setSymbolInputError("You must enter a call sign");
          }

          const resp = await registerAgent(
            newAgentForm.symbol,
            newAgentForm.faction
          );

          // TODO: type the json response below (it is partially typed)

          const json = await resp.json();

          if (json.error) {
            setCreateAgentError(json.error.message);
          } else {
            if (resp.ok && json.data.token) {
              setToken(json.data.token);
              setAgentData(json.data.agent);
              setShowAgentData(true);
              window.localStorage.setItem("agent-token", json.data.token);
            } else {
              setLoadAgentError("Could not find token on response");
            }
          }
        }}
      />
    </>
  );
}

export default NewGame;

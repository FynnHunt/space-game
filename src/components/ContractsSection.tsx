import { useEffect, useState } from "react";
import styled from "styled-components";
import { Accordion, AccordionPanel, Box, Button } from "grommet";
import { Contract } from "../schema/types";
import { acceptContract, fetchContracts } from "../helpers/apiHelper";
import { getAgentToken } from "../helpers/tokenHelper";
import { spacing } from "../helpers/spacing";

const ShipWrapper = styled.div<{ colour: string }>`
  padding: ${spacing.medium};
  border: solid 2px ${(props) => props.colour};
  margin-bottom: ${spacing.large};
`;

const ContractInfo = ({
  contract,
  token,
  reload,
  setReload,
  colour,
}: {
  contract: Contract;
  token: string;
  reload: number;
  setReload: (num: number) => void;
  colour: string;
}) => {
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    const now = new Date();
    const deadlineToAccept = new Date(contract.deadlineToAccept);
    setIsExpired(deadlineToAccept < now);
  }, [contract]);

  return (
    <ShipWrapper colour={colour}>
      <h3>Contract type: {contract.type}</h3>
      {contract.terms.deliver.map((deliver) => (
        <ShipWrapper
          colour={
            deliver.unitsFulfilled >= deliver.unitsRequired ? "green" : "red"
          }
        >
          <p>
            You must deliver <b>{deliver.unitsRequired}</b> units of{" "}
            <b>{deliver.tradeSymbol}</b> to <b>{deliver.destinationSymbol}</b>.
          </p>
          <p>
            {/* TODO: With more time it would be nice to keep this value updated, possibly using websockets. */}
            <b>Progress:</b> {deliver.unitsFulfilled}/{deliver.unitsRequired}{" "}
            delivered.
          </p>
        </ShipWrapper>
      ))}
      <p>
        <b>Expiration:</b>{" "}
        {new Date(contract.deadlineToAccept).toLocaleTimeString("en-GB")} on{" "}
        {new Date(contract.deadlineToAccept).toLocaleDateString("en-GB")}
      </p>
      <p>
        <b>Deadline to accept:</b>{" "}
        {new Date(contract.deadlineToAccept).toLocaleTimeString("en-GB")} on{" "}
        {new Date(contract.deadlineToAccept).toLocaleDateString("en-GB")}
      </p>
      <Accordion>
        <AccordionPanel label="Terms">
          <Box pad="medium">
            <p>
              <b>Deadline:</b>{" "}
              {new Date(contract.terms.deadline).toLocaleTimeString("en-GB")} on{" "}
              {new Date(contract.terms.deadline).toLocaleDateString("en-GB")}
            </p>
            <p>
              <b>Payment:</b> On acceptance: {contract.terms.payment.onAccepted}
              , On delivery: {contract.terms.payment.onFulfilled}
            </p>
          </Box>
        </AccordionPanel>
      </Accordion>
      {/* TODO: Add more contract info */}
      {!contract.accepted && (
        <Button
          label={isExpired ? "Expired" : "Accept contract "}
          active={isExpired}
          primary
          style={{ margin: `${spacing.large} 0` }}
          onClick={() => {
            if (!isExpired) {
              acceptContract(token, contract.id).then(() => {
                setReload(reload + 1); // force component to re render to get new contract data
              });
              // TODO: Add some error handling here for case the accept contract request fails
            }
          }}
        />
      )}
    </ShipWrapper>
  );
};

const ContractsSection = () => {
  const [reload, setReload] = useState(0);
  const [availableContracts, setAvailableContracts] = useState<Contract[]>();
  const [acceptedContracts, setAcceptedContracts] = useState<Contract[]>();
  const [completedContracts, setCompletedContracts] = useState<Contract[]>();
  const [token, setToken] = useState("");

  useEffect(() => {
    setToken(getAgentToken());
  }, []);

  useEffect(() => {
    const getContracts = async () => {
      const contractsRes = await fetchContracts(token);
      if (contractsRes) {
        setAcceptedContracts(
          contractsRes.filter((contract) => contract.accepted)
        );
        setAvailableContracts(
          contractsRes.filter(
            (contract) =>
              !contract.accepted &&
              new Date(contract.deadlineToAccept) > new Date()
          )
        );
        setCompletedContracts(
          contractsRes.filter((contract) => contract.fulfilled)
        );
      }
    };
    getContracts();
  }, [token, reload]);

  return (
    <>
      <h2>Accepted contracts</h2>
      {acceptedContracts &&
        acceptedContracts.map((contract, idx) => (
          <ContractInfo
            colour="green"
            key={idx}
            contract={contract}
            token={token}
            reload={reload}
            setReload={setReload}
          />
        ))}
      <h2>Available contracts</h2>
      {availableContracts ? (
        availableContracts.map((contract, idx) => (
          <ContractInfo
            colour="blue"
            key={idx}
            contract={contract}
            token={token}
            reload={reload}
            setReload={setReload}
          />
        ))
      ) : (
        <p>No contracts available</p>
      )}
      <h2>Completed contracts</h2>
      {completedContracts &&
        completedContracts.map((contract, idx) => (
          <ContractInfo
            colour="white"
            key={idx}
            contract={contract}
            token={token}
            reload={reload}
            setReload={setReload}
          />
        ))}
      <p>TODO: Implement more contract info</p>
    </>
  );
};

export default ContractsSection;

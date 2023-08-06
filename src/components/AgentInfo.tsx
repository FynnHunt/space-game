const AgentInfo = ({ label, value }: { label: string; value: string }) => (
  <h2>
    {label}: <span style={{ fontWeight: "normal" }}>{value}</span>
  </h2>
);

export default AgentInfo;

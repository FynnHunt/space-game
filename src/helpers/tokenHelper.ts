export const getAgentToken = () => {
  if (typeof window !== "undefined") {
    return window.localStorage.getItem("agent-token") || "error";
  } else return "error";
};

import styled from "styled-components";
import { spacing } from "../helpers/spacing";

export const Box = styled.div<{ colour: string }>`
  padding: ${spacing.medium};
  border: solid 2px ${(props) => props.colour};
  margin: ${spacing.large} 0;
`;

import styled from "styled-components";

export const PageContainer = styled.div<{ $maxWidth?: string }>`
  max-width: ${(p) => p.$maxWidth ?? "800px"};
  margin: 0 auto;
  padding: 24px 16px 40px;
`;

export const SectionLabel = styled.h4`
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 0.72em;
  color: #aaa;
  margin: 28px 0 10px;
  padding-bottom: 6px;
  border-bottom: 1px solid #eee;
`;

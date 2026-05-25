import styled from "styled-components";

/** Wrapper that scopes table td styles to the tenthings tables */
export const TenThingsTableContainer = styled.div`
  td {
    overflow: hidden;
    max-width: 250px;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: middle !important;
  }
  td:hover {
    overflow: visible;
    white-space: initial;
  }
`;

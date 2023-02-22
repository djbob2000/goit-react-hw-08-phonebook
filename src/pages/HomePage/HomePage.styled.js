import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledHomeLink = styled(Link)`
  text-decoration: none;
  margin: 0 6px;
  color: white;
  transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  border: 1px solid #1677ff;
  border-radius: 8px;
  box-shadow: 0 2px 0 rgb(5 145 255 / 10%);
  padding: 5px 8px;
  background-color: #1677ff;
  font-weight: 400;
  font-size: 20px;
  :hover {
    opacity: 0.8;
  }
`;

export const StyledImg = styled.img`
  margin-right: auto;
  margin-left: auto;
`;

import { DialogContent } from '@mui/material';
import styled from 'styled-components';

export const StyledLi = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  margin-bottom: 10px;
  gap: 10px;
  width: 500px;
  :hover {
    box-shadow: 0px 0px 7px 1px rgba(0, 0, 0, 0.38);
  }
`;

export const StyledNamePhone = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledNameP = styled.p`
  font-weight: bold;
  margin: 0;
`;
export const StyledNumberP = styled.p`
  margin: 0;
`;

export const StyledWrapper = styled.div`
  display: flex;
  gap: 15px;
`;

export const StyledWrapperButton = styled.div``;

export const StyledDialogContent = styled(DialogContent)`
  display: flex;
  flex-direction: column;
  width: 500px;
  margin-top: 10px;
  gap: 15px;
  overflow: visible;
`;

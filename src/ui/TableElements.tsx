import styled from 'styled-components';
import { space, SpaceProps } from 'styled-system';

// styles
import {
  bookFont,
  boldFont,
  mediumFont,
  grayDark,
  border,
  today,
  closed
} from './colors';

export const TableRow = styled.div<SpaceProps>`
  ${space};
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${border};
`;

export const TodayLabel = styled.h4`
  display: inline-block;
  color: ${today};
  font-family: ${boldFont};
  text-transform: uppercase;
  font-size: 12px;
  line-height: 22px;
`;

export const CurrentDayLabel = styled.h3<SpaceProps>`
  ${space}
  color: ${grayDark};
  text-transform: capitalize;
  font-family: ${mediumFont};
  font-size: 16px;
  line-height: 22px;
`;

export const OpenHourLabel = styled.span`
  color: ${grayDark};
  font-family: ${bookFont};
  font-size: 16px;
  line-height: 22px;
`;

export const ClosedLabel = styled.span`
  display: inline-block;
  color: ${closed};
  font-family: ${bookFont};
  font-size: 16px;
  line-height: 22px;
`;

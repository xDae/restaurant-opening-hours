import React from 'react';

// components
import Flex from '../ui/Flex';
import { TableRow, TodayLabel, CurrentDayLabel } from '../ui/TableElements';
import OpeningLabel from './OpeningLabel';

interface DayRowProps {
  label: string;
  isToday: boolean;
  openingHours: [number, number][] | [];
}

const DayRow = ({ label, isToday, openingHours, ...rest }: DayRowProps) => (
  <TableRow my="8px" pb="8px" {...rest}>
    <Flex alignItems="baseline" data-testid={label}>
      <CurrentDayLabel mr="8px">{label}</CurrentDayLabel>
      {isToday && <TodayLabel data-testid="isTodayLabel">Today</TodayLabel>}
    </Flex>

    <OpeningLabel data-testid={`opening-${label}`} openingHours={openingHours} />
  </TableRow>
);

export default DayRow;

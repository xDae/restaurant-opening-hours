import React from 'react';

import styled from 'styled-components';
import { space } from 'styled-system';

import getISODay from 'date-fns/getISODay';
import isEqual from 'lodash/isEqual';

// components
import Box from '../ui/Box';
import Flex from '../ui/Flex';
import IconClock from '../components/IconClock';
import DayRow from '../components/DayRow';

// styles
import { boldFont, grayDark } from '../ui/colors';
import packOpeningHours, { weekSchedule } from '../utils/packOpeningHours';

const TableHeader = styled.h1`
  ${space}
  color: ${grayDark};
  font-family: ${boldFont};
  font-size: 24px;
  line-height: 30px;
`;

interface OpeningHoursTableProps {
  label: string;
  days: weekSchedule;
}

const isToday = (dayOfTheWeekIndex: number) =>
  isEqual(getISODay(new Date()) - 1, dayOfTheWeekIndex);

const OpeningHoursTable = ({ label, days }: OpeningHoursTableProps) => {
  const daySchedule = packOpeningHours(days);

  return (
    <Box px={28} py={24} width={400}>
      <Flex alignItems="center" mb={14}>
        <IconClock mr="8px" />
        {label && <TableHeader data-testid="table-label">{label}</TableHeader>}
      </Flex>
      <hr />

      {daySchedule.map(({ day, opening }, dayIndex) => (
        <DayRow
          key={day}
          data-testid="row"
          label={day}
          isToday={isToday(dayIndex)}
          openingHours={opening}
        />
      ))}
    </Box>
  );
};

export default OpeningHoursTable;

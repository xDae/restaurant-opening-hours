import React from 'react';

// lodash utilities
import isEmpty from 'lodash/isEmpty';
import join from 'lodash/join';

// utils
import convertToDate from '../utils/convertToDate';

// ui elements
import { OpenHourLabel, ClosedLabel } from '../ui/TableElements';

export const OpeningLabel = ({
  openingHours,
  ...rest
}: {
  openingHours: [number, number][] | [];
}) =>
  isEmpty(openingHours) ? (
    <ClosedLabel {...rest}>Closed</ClosedLabel>
  ) : (
    <OpenHourLabel {...rest}>
      {
        // @ts-ignore
        join(openingHours.map(convertToDate), ', ')}
    </OpenHourLabel>
  );

export default OpeningLabel;

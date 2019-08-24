import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import OpeningHoursTable from '../../components/OpeningHoursTable';
import { weekSchedule } from '../../utils/packOpeningHours';

describe('Table Component', () => {
  afterEach(cleanup);

  it('should render the table with the label and weekdays', () => {
    const openingHours: weekSchedule = {
      monday: [],
      tuesday: [],
      wednesday: [],
      thursday: [],
      friday: [],
      saturday: [],
      sunday: []
    };

    const label = 'Some label';

    const { container, getByTestId, getAllByTestId } = render(
      <OpeningHoursTable days={openingHours} label={label} />
    );

    expect(getByTestId('table-label')).toHaveTextContent(label);
    expect(getAllByTestId('row')).toHaveLength(7);
  });

  it('should render the opening dates for a single day', () => {
    const openingHours: weekSchedule = {
      monday: [
        {
          type: 'open',
          value: 36000
        },
        {
          type: 'close',
          value: 64800
        }
      ],
      tuesday: [],
      wednesday: [],
      thursday: [],
      friday: [],
      saturday: [],
      sunday: []
    };

    const { debug, getByTestId, getAllByTestId } = render(
      <OpeningHoursTable days={openingHours} label="xxx" />
    );

    expect(getByTestId('monday')).toHaveTextContent('monday');
    expect(getByTestId('opening-monday')).toHaveTextContent('10 AM - 6 PM');
  });

  it('should shows two opening dates for a single day', () => {
    const openingHours: weekSchedule = {
      monday: [],
      tuesday: [
        {
          type: 'open',
          value: 36000
        },
        {
          type: 'close',
          value: 57600
        },
        {
          type: 'open',
          value: 64800
        },
        {
          type: 'close',
          value: 82800
        }
      ],

      wednesday: [],
      thursday: [],
      friday: [],
      saturday: [],
      sunday: []
    };

    const { debug, getByTestId, getAllByTestId } = render(
      <OpeningHoursTable days={openingHours} label="xxx" />
    );

    expect(getByTestId('opening-monday')).toHaveTextContent('Closed');
    expect(getByTestId('opening-tuesday')).toHaveTextContent(
      '10 AM - 4 PM, 6 PM - 11 PM'
    );
  });

  it('should render the opening dates for multiple days (splited opening hours)', () => {
    const openingHours: weekSchedule = {
      monday: [
        {
          type: 'close',
          value: 54000
        },
        {
          type: 'open',
          value: 36000
        }
      ],
      tuesday: [
        {
          type: 'close',
          value: 540000
        },
        {
          type: 'open',
          value: 64800
        },
        {
          type: 'close',
          value: 82800
        }
      ],
      wednesday: [],
      thursday: [],
      friday: [],
      saturday: [],
      sunday: [
        {
          type: 'open',
          value: 36000
        }
      ]
    };

    const { debug, getByTestId, getAllByTestId } = render(
      <OpeningHoursTable days={openingHours} label="xxxxx" />
    );

    expect(getByTestId('opening-monday')).toHaveTextContent('10 AM - 6 AM');
    expect(getByTestId('opening-tuesday')).toHaveTextContent('6 PM - 11 PM');
    expect(getByTestId('opening-sunday')).toHaveTextContent('10 AM - 3 PM');
  });
});

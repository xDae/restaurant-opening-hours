import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import DayRow from '../../components/DayRow';
// import { weekSchedule } from '../../utils/packOpeningHours';

describe('DayRow Component', () => {
  afterEach(cleanup);

  it('should render the row with the label and the open time', () => {
    const label = "friday";

    const { getByTestId } = render(
      <DayRow
        label={label}
        isToday={false}
        openingHours={[[36000, 54000]]}
      />
    );

    expect(getByTestId(label)).toHaveTextContent(label);
    expect(getByTestId(`opening-${label}`)).toHaveTextContent('10 AM - 3 PM');
  });

  it('should show the converted array of opening times', () => {
    const label = "tuesday";

    const { getByTestId } = render(
      <DayRow
        label={label}
        isToday={false}
        openingHours={[[36000, 54000], [64000, 84000]]}
      />
    );

    expect(getByTestId(label)).toHaveTextContent(label);
    expect(getByTestId(`opening-${label}`)).toHaveTextContent('10 AM - 3 PM, 5 PM - 11 PM');
  });

  it('should show the Today label', () => {
    const { getByTestId } = render(
      <DayRow
        label="xxx"
        isToday={true}
        openingHours={[]}
      />
    );

    expect(getByTestId('isTodayLabel')).toBeVisible();
  });
});

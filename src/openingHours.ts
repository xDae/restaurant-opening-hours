import { weekSchedule } from './utils/packOpeningHours';

export const openingHours: weekSchedule = {
  monday: [
    {
      type: 'close',
      value: 75600
    }
  ],
  tuesday: [
    {
      type: 'open',
      value: 36000
    },
    {
      type: 'close',
      value: 64800
    }
  ],
  wednesday: [],
  thursday: [
    {
      type: 'open',
      value: 36000
    },
    {
      type: 'close',
      value: 64800
    }
  ],
  friday: [
    {
      type: 'open',
      value: 36000
    }
  ],
  saturday: [
    {
      type: 'close',
      value: 3600
    },
    {
      type: 'open',
      value: 32400
    },
    {
      type: 'close',
      value: 39600
    },
    {
      type: 'open',
      value: 57600
    },
    {
      type: 'close',
      value: 82800
    }
  ],
  sunday: [
    {
      type: 'close',
      value: 3600
    },
    {
      type: 'open',
      value: 43200
    }
  ]
};

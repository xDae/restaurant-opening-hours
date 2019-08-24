import packOpeningHours, {
  daySchedule,
  weekSchedule
} from '../packOpeningHours';

describe('pack opening hours', () => {
  it('should return an empty array', () => {
    const openingHours: weekSchedule = {
      monday: [],
      tuesday: [],
      wednesday: [],
      thursday: [],
      friday: [],
      saturday: [],
      sunday: []
    };

    const expectedResult: daySchedule = [
      { day: 'monday', opening: [] },
      { day: 'tuesday', opening: [] },
      { day: 'wednesday', opening: [] },
      { day: 'thursday', opening: [] },
      { day: 'friday', opening: [] },
      { day: 'saturday', opening: [] },
      { day: 'sunday', opening: [] }
    ];

    expect(packOpeningHours(openingHours)).toEqual(expectedResult);
  });

  it('should return a single array of values', () => {
    const openingHours: weekSchedule = {
      monday: [
        {
          type: 'open',
          value: 1
        },
        {
          type: 'close',
          value: 2
        }
      ],
      tuesday: [],
      wednesday: [],
      thursday: [],
      friday: [],
      saturday: [],
      sunday: []
    };

    const expectedResult = [
      { day: 'monday', opening: [[1, 2]] },
      { day: 'tuesday', opening: [] },
      { day: 'wednesday', opening: [] },
      { day: 'thursday', opening: [] },
      { day: 'friday', opening: [] },
      { day: 'saturday', opening: [] },
      { day: 'sunday', opening: [] }
    ];

    expect(packOpeningHours(openingHours)).toEqual(expectedResult);
  });

  it('should return a single array of values', () => {
    const openingValuesWithClosing: weekSchedule = {
      monday: [
        {
          type: 'close',
          value: 99
        },
        {
          type: 'open',
          value: 1
        },
        {
          type: 'close',
          value: 2
        }
      ],
      tuesday: [],
      wednesday: [],
      thursday: [],
      friday: [],
      saturday: [],
      sunday: []
    };

    const expectedResult = [
      { day: 'monday', opening: [[1, 2]] },
      { day: 'tuesday', opening: [] },
      { day: 'wednesday', opening: [] },
      { day: 'thursday', opening: [] },
      { day: 'friday', opening: [] },
      { day: 'saturday', opening: [] },
      { day: 'sunday', opening: [] }
    ];

    expect(packOpeningHours(openingValuesWithClosing)).toEqual(expectedResult);
  });

  it('should return two arrays of values', () => {
    const values: weekSchedule = {
      monday: [
        {
          type: 'open',
          value: 1
        },
        {
          type: 'close',
          value: 2
        },
        {
          type: 'open',
          value: 3
        },
        {
          type: 'close',
          value: 4
        }
      ],
      tuesday: [],
      wednesday: [],
      thursday: [],
      friday: [],
      saturday: [],
      sunday: []
    };

    expect(packOpeningHours(values)).toEqual([
      { day: 'monday', opening: [[1, 2], [3, 4]] },
      { day: 'tuesday', opening: [] },
      { day: 'wednesday', opening: [] },
      { day: 'thursday', opening: [] },
      { day: 'friday', opening: [] },
      { day: 'saturday', opening: [] },
      { day: 'sunday', opening: [] }
    ]);
  });

  it('should return an object with two arrays of values for splited opening hours', () => {
    const values: weekSchedule = {
      monday: [
        {
          type: 'open',
          value: 1
        }
      ],
      tuesday: [
        {
          type: 'close',
          value: 2
        },
        {
          type: 'open',
          value: 3
        },
        {
          type: 'close',
          value: 4
        }
      ],
      wednesday: [],
      thursday: [],
      friday: [],
      saturday: [],
      sunday: []
    };

    expect(packOpeningHours(values)).toEqual([
      { day: 'monday', opening: [[1, 2]] },
      { day: 'tuesday', opening: [[3, 4]] },
      { day: 'wednesday', opening: [] },
      { day: 'thursday', opening: [] },
      { day: 'friday', opening: [] },
      { day: 'saturday', opening: [] },
      { day: 'sunday', opening: [] }
    ]);
  });

  it('should return the correct hours for an open Sundday', () => {
    const values: weekSchedule = {
      monday: [
        {
          type: 'close',
          value: 2
        }
      ],
      tuesday: [],
      wednesday: [],
      thursday: [],
      friday: [],
      saturday: [],
      sunday: [
        {
          type: 'open',
          value: 1
        }
      ]
    };

    expect(packOpeningHours(values)).toEqual([
      { day: 'monday', opening: [] },
      { day: 'tuesday', opening: [] },
      { day: 'wednesday', opening: [] },
      { day: 'thursday', opening: [] },
      { day: 'friday', opening: [] },
      { day: 'saturday', opening: [] },
      { day: 'sunday', opening: [[1, 2]] }
    ]);
  });

  it('should return an object with packed opening hours for complex case', () => {
    const values: weekSchedule = {
      monday: [
        {
          type: 'close',
          value: 19
        },
        {
          type: 'open',
          value: 20
        }
      ],
      tuesday: [
        {
          type: 'close',
          value: 21
        },
        {
          type: 'open',
          value: 1
        },
        {
          type: 'close',
          value: 2
        }
      ],
      wednesday: [
        {
          type: 'open',
          value: 3
        },
        {
          type: 'close',
          value: 4
        },
        {
          type: 'open',
          value: 5
        }
      ],
      thursday: [
        {
          type: 'close',
          value: 6
        },
        {
          type: 'open',
          value: 7
        },
        {
          type: 'close',
          value: 8
        },
        {
          type: 'open',
          value: 9
        }
      ],
      friday: [
        {
          type: 'close',
          value: 10
        },
        {
          type: 'open',
          value: 11
        },
        {
          type: 'close',
          value: 12
        }
      ],
      saturday: [
        {
          type: 'open',
          value: 13
        },
        {
          type: 'close',
          value: 14
        },
        {
          type: 'open',
          value: 15
        },
        {
          type: 'close',
          value: 16
        }
      ],
      sunday: [
        {
          type: 'open',
          value: 16
        },
        {
          type: 'close',
          value: 17
        },
        {
          type: 'open',
          value: 18
        }
      ]
    };

    expect(packOpeningHours(values)).toEqual([
      { day: 'monday', opening: [[20, 21]] },
      { day: 'tuesday', opening: [[1, 2]] },
      { day: 'wednesday', opening: [[3, 4], [5, 6]] },
      { day: 'thursday', opening: [[7, 8], [9, 10]] },
      { day: 'friday', opening: [[11, 12]] },
      { day: 'saturday', opening: [[13, 14], [15, 16]] },
      { day: 'sunday', opening: [[16, 17], [18, 19]] }
    ]);
  });
});

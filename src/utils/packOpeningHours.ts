import isEmpty from 'lodash/isEmpty';
import isEqual from 'lodash/isEqual';

export type weekDay =
  | 'monday'
  | 'tuesday'
  | 'wednesday'
  | 'thursday'
  | 'friday'
  | 'saturday'
  | 'sunday';

interface event {
  type: 'open' | 'close';
  value: number;
}

export type weekSchedule = {
  [key in weekDay]: event[] | [];
};

type timeRange = [number, number];

export type openingHours = timeRange[] | [];

export type daySchedule = {
  day: weekDay;
  opening: openingHours;
}[];

const packOpeningHours = (week: weekSchedule): daySchedule => {
  const weekDays = Object.keys(week) as weekDay[];

  return weekDays.reduce((acc: any[], day: weekDay, dayIndex) => {
    let currentDayValues = week[day];

    if (isEmpty(currentDayValues)) {
      return [
        ...acc,
        {
          day,
          opening: []
        }
      ];
    }

    // currentDayValues cannot be empty at this point ?
    // @ts-ignore
    const opening: openingHours = currentDayValues.reduce(
      (acc: event[], hour: event, hourIndex: number) => {
        if (isEqual(hour.type, 'open')) {
          const openingHour = hour.value;
          const nextDayValues = week[weekDays[dayIndex + 1]];

          const closingHour = currentDayValues[hourIndex + 1]
            ? currentDayValues[hourIndex + 1].value
            : nextDayValues
            ? // if no closing on sunday, get closing hour from monday
              nextDayValues[0].value
            : week.monday.find(val => isEqual(val.type, 'close'))!.value;

          return [...acc, [openingHour, closingHour]];
        }

        return acc;
      },
      []
    );

    return [
      ...acc,
      {
        day,
        opening
      }
    ];
  }, []);
};

export default packOpeningHours;

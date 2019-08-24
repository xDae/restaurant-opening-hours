import moment from 'moment';

const secondsToHours = (seconds: number) => {
  const dateString = new Date(seconds * 1000);
  const hourMoment = moment.utc(dateString).format('h A');

  return hourMoment;
};

const convertToDate = (ranges: number[]) => {
  const [openingHour, closingHour] = ranges.map(seconds =>
    secondsToHours(seconds)
  );

  return `${openingHour} - ${closingHour}`;
};

export default convertToDate;

import convertToDate from '../convertToDate';

describe('convertToDate util function', () => {
  it('should return string of formated dates', () => {
    const seconds = [36000, 64800];

    const result = convertToDate(seconds);

    expect(result).toEqual('10 AM - 6 PM');
  });
});

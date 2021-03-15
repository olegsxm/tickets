export const dateValidatorUtils = (date: string): boolean => {
  const _date = new Date(date);
  return _date instanceof Date && !isNaN(_date.getTime())
}

export const compareDatesUtil = (startDate: string, finishDate: string): boolean => {
  return (new Date(finishDate).getTime() - new Date(startDate).getTime()) > 0
}

export const dateTimeRegexp = /(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})/

import moment from "moment"

export const dateToString = (date) => moment(date).format("MMMM Y")

export const totalExperience = (startDate, endDate) =>
  endDate.getMonth() -
  startDate.getMonth() +
  12 * (endDate.getFullYear() - startDate.getFullYear())

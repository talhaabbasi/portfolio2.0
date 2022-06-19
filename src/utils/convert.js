import moment from "moment"
export const dateToString = (date) => {
  return moment(date).format("MMMM Y")
}

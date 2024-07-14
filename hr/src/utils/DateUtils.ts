import moment from "moment";

export const getDate = (dateString: string) => {
  if (dateString == null) {
    return "--";
  }
  return moment(dateString).format("DD/MM/YYYY - HH:mm");
}

export const getTotalHours = (dateStart: string, dateEnd: string) => {
  if (dateStart == null || dateEnd == null) {
    return "--";
  }
  return moment(dateEnd).diff(moment(dateStart), "hours");
}

export const getTotalWithDates = (value: number, dateStart: string, dateEnd: string) => {
  const hours = getTotalHours(dateStart, dateEnd);
    if (hours == "--") {
      return "--";
    }
    return "$" + (hours * value).toFixed(2);
}
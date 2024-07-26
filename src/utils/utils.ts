import { images } from "./svg";
export const checkWeather = (weather: string) => {
  if (weather === "Clouds") {
    return images[2].Clouds;
  } else if (weather === "Rain") {
    return images[1].Rain;
  } else if (weather === "Clear") {
    return images[0].Clear;
  }
};

export function getMonthAbbreviation(monthIndex: number) {
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return monthNames[monthIndex];
}

// Hàm lấy ngày tháng hiện tại với định dạng "Today 15 Apr"
export function getFormattedDate() {
  const today = new Date();
  const day = today.getDate();
  const monthIndex = today.getMonth();
  const monthAbbreviation = getMonthAbbreviation(monthIndex);

  return `Today ${day} ${monthAbbreviation}`;
}

export const calTemp = (tmp: number) => {
  return Math.floor(tmp - 273.15);
};

export const getDay = (timestamp: number) => {
  const date = new Date(timestamp * 1000);
  // Get the day of the week
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayOfWeek = daysOfWeek[date.getUTCDay()];
  return dayOfWeek;
};

export const getHour = (dtString: string): boolean => {
  const now = new Date();

  // Hàm so sánh ngày
  const isSameDay = (date1: Date, date2: Date): boolean =>
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate();

  // Chuyển đổi chuỗi đầu vào thành đối tượng Date
  const dtDate = new Date(dtString);
  // console.log(dtDate);
  // Kiểm tra nếu ngày tháng năm bằng nhau và giờ của dt lớn hơn giờ hiện tại
  if (isSameDay(dtDate, now) && dtDate.getHours() > now.getHours()) {
    return true;
  }

  return false;
};

export const formatDate = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const timeZoneOffset = -date.getTimezoneOffset();
  const sign = timeZoneOffset >= 0 ? "+" : "-";
  const hoursOffset = String(
    Math.floor(Math.abs(timeZoneOffset) / 60)
  ).padStart(2, "0");
  const minutesOffset = String(Math.abs(timeZoneOffset) % 60).padStart(2, "0");
  const timeZone = `GMT${sign}${hoursOffset}:${minutesOffset}`;

  return `${year}-${month}-${day} ${hours}:${minutes} ${timeZone}`;
};

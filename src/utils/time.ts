import dayjs from "dayjs";

export const calculateDuration = (start: Date, end: Date | null) => {
  if (!end) return "";

  const duration = dayjs(end).diff(start, "minutes");
  const hours = Math.floor(duration / 60);
  const minutes = duration % 60;

  return `${hours}:${minutes.toString().padStart(2, "0")}`;
};

export const calculateDurationInMinutes = (start: Date, end: Date | null) => {
  if (!end) return "";

  const duration = dayjs(end).diff(start, "seconds");
  const minutes = Math.floor(duration / 60);
  const seconds = duration % 60;

  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
};

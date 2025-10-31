import { Timestamp } from "firebase/firestore";

export function stringToTimestamp(dateStr: string): Timestamp {
  return Timestamp.fromDate(new Date(dateStr));
}

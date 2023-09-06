import { Trip as TTrip } from "../api/trip/Trip";

export const TRIP_TITLE_FIELD = "tripinfo";

export const TripTitle = (record: TTrip): string => {
  return record.tripinfo || String(record.id);
};

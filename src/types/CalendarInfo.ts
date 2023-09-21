export type Slot = { start: string; end: string };

export type CalendarInfo = {
  [key: string]: Slot[];
};

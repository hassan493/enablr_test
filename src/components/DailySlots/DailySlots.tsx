import { useCallback, useState } from "react";
import classNames from "classnames";

import styles from "./DailySlots.module.css";
import { Slot } from "../../types/CalendarInfo";

interface Props {
  date: number;
  day: string;
  slots: Slot[];
}

export const DailySlots = ({ date, day, slots }: Props): JSX.Element => {
  const [selectedSlot, setSelectedSlot] = useState<string | null>();
  const blanks = Array(5 - slots.length).fill(0);

  const handleSlotClick = useCallback((slotStart: string) => {
    console.log({ slotStart });

    setSelectedSlot(slotStart);
  }, []);

  console.log({ selectedSlot });
  return (
    <div className={styles.Container}>
      <div className={styles.DateContainer}>
        <span className={styles.Date}>{date}</span>
        <span className={styles.Day}>{day}</span>
      </div>
      <div className={styles.SlotContainer}>
        {slots.map((slot) => (
          <button
            onClick={() => handleSlotClick(slot.start)}
            className={classNames(
              styles.Slot,
              selectedSlot === slot.start
                ? styles.SelectedSlot
                : styles.AvailableSlot
            )}
          >
            {slot.start}
          </button>
        ))}
        {blanks.map(() => (
          <div className={classNames(styles.Slot, styles.BlankSlot)}> - - </div>
        ))}
      </div>
    </div>
  );
};

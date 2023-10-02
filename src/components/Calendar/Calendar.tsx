import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

import { DailySlots } from "../DailySlots/DailySlots";
import styles from "./Calendar.module.css";

import { CalendarInfo } from "../../types/CalendarInfo";
import {
  isMonday,
  nextMonday,
  isFriday,
  isSaturday,
  isSunday,
  previousMonday,
  previousFriday,
  toDate,
  nextFriday,
  eachDayOfInterval,
  getDate,
  format,
} from "date-fns";
import AvatarComponent from "../../tech_interview"

const dayNames = ["Mon", "Tue", "Wed", "Thu", "Fri"];

interface Props {
  available_slots: CalendarInfo;
}

export const Calendar = ({ available_slots }: Props): JSX.Element => {
  const [weekDays, setWeekDays] = useState<Date[]>([]);

  const moveWeek = (type: string) => {
    switch (type) {
      case "forward":
        setWeekDays(
          eachDayOfInterval({
            start: nextMonday(weekDays[0]),
            end: nextFriday(weekDays[4]),
          })
        );
        break;
      case "backward":
        setWeekDays(
          eachDayOfInterval({
            start: previousMonday(weekDays[0]),
            end: previousFriday(weekDays[4]),
          })
        );
        break;
      default:
        setWeekDays(
          eachDayOfInterval({
            start: nextMonday(weekDays[0]),
            end: nextFriday(weekDays[4]),
          })
        );
        break;
    }
  };

  useEffect(() => {
    const now = new Date();
    const result = eachDayOfInterval({
      start: isMonday(now) ? now : (isSaturday(now) || isSunday(now)) ? toDate(nextMonday(now)) : toDate(previousMonday(now)) ,
      end: isFriday(now) ? now : toDate(nextFriday(now)),
    });
    setWeekDays(result);
  }, []);

  return (
    <div className={styles.CalendarContainer}>
      <button className={styles.NavButton} onClick={() => moveWeek("backward")}>
      <FontAwesomeIcon icon={faChevronLeft} color="#95A1B5" size="2xl"  />
      </button>
      {weekDays.map((date, index) => (
        <DailySlots
          slots={available_slots[format(date, "yyyy-MM-dd")] ?? []}
          date={getDate(date)}
          day={dayNames[index]}
        />
      ))}
      <button className={styles.NavButton} onClick={() => moveWeek("forward")}>
        <FontAwesomeIcon icon={faChevronRight} color="#95A1B5" size="2xl" />
      </button>
      <AvatarComponent/>
    </div>
  );
};

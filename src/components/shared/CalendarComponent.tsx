import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import { EventInput } from "@fullcalendar/core";

interface CalendarProps {
  onDateClick: (value: any) => void;
  onEventClick: (value: any) => void;
  events: EventInput[];
}

const CalendarComponent = ({
  onDateClick,
  onEventClick,
  events,
}: CalendarProps) => {
  const handleDateClick = (arg: any) => {
    onDateClick(arg);
  };
  const handleEventClick = (arg: any) => {
    onEventClick(arg);
  };

  return (
    <div className="calendarCard">
      <FullCalendar
        plugins={[dayGridPlugin, listPlugin, interactionPlugin, timeGridPlugin]}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
        }}
        buttonText={{
          today: "Today",
          month: "Month",
          week: "Week",
          day: "Day",
          list: "List",
          prev: "Prev",
          next: "Next",
        }}
        initialView="dayGridMonth"
        dayMaxEventRows={1}
        editable={true}
        selectable={true}
        droppable={true}
        handleWindowResize={true}
        events={events}
        dateClick={handleDateClick}
        eventClick={handleEventClick}
      />
    </div>
  );
};

export default CalendarComponent;

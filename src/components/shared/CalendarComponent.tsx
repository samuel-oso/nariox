import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import { EventInput } from "@fullcalendar/core";
import { Box, useMantineColorScheme, useMantineTheme } from "@mantine/core";
import "../../styles/pages/Calendar.css";

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

  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  const theme = useMantineTheme();

  return (
    <Box
      sx={{
        backgroundColor: dark ? theme.colors.secondary[1] : "white",
        border: dark ? "none" : "1px solid var(--mantine-color-grey300-4)",
        padding: "20px",
        minHeight: "100%",
      }}
    >
      <Box
        sx={{ color: dark ? theme.colors.grey300[0] : theme.colors.grey800[4] }}
      >
        <FullCalendar
          plugins={[
            dayGridPlugin,
            listPlugin,
            interactionPlugin,
            timeGridPlugin,
          ]}
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
      </Box>
    </Box>
  );
};

export default CalendarComponent;

import React, { useState } from "react";
import CalendarComponent from "../../components/shared/CalendarComponent";
import calendarImage from "../../assets/images/calendarImage.png";
import "@fullcalendar/react";
import { DateClickArg } from "@fullcalendar/interaction";
import { EventClickArg, EventInput } from "@fullcalendar/core";
import { EventsData } from "../../assets/data/EventsData";
import AddEditEvent from "../../components/shared/AddEditEvent";
import Layout from "../../utils/Layout";
import "../../styles/pages/Calendar.css";
import {
  Box,
  Button,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";
import { IconCirclePlus, IconRefresh } from "@tabler/icons";

interface IntroCardProps {
  createNewEvent: () => void;
}

const IntroCard = ({ createNewEvent }: IntroCardProps) => {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  const theme = useMantineTheme();

  return (
    <Box
      sx={{
        backgroundColor: dark ? theme.colors.secondary[1] : "white",
        border: dark ? "none" : "1px solid var(--mantine-color-grey300-4)",
        padding: "20px",
        marginBottom: "16px",
      }}
      className="introCard"
    >
      <img alt="calendar img" src={calendarImage} />
      <div style={{ marginTop: "28px" }}>
        <h5
          style={{
            color: dark ? theme.colors.grey300[0] : theme.colors.grey800[4],
          }}
        >
          Welcome to Your Calendar
        </h5>
        <p
          style={{
            color: dark ? theme.colors.grey100[6] : theme.colors.secondary[4],
            marginTop: "4px",
            fontSize: "14px",
          }}
        >
          The calendar shows the events synced from all your linked calendars.
          Click on event to see or edit the details. You can create new event by
          clicking on "Create New event" button or any cell available in
          calendar below.
        </p>
        <div style={{ marginTop: "16px" }}>
          <Button
            className="btnCreateNew"
            leftIcon={<IconCirclePlus size={16} />}
            onClick={createNewEvent}
          >
            Create New Event
          </Button>
          <Button
            className="btnLink"
            style={{
              border: dark
                ? "1px solid var(--mantine-color-grey100-8)"
                : "1px solid var(--mantine-color-grey300-4)",
              color: dark ? theme.colors.white[2] : theme.colors.grey900[4],
            }}
            leftIcon={<IconRefresh size={16} />}
          >
            Link Calendars
          </Button>
        </div>
      </div>
    </Box>
  );
};

const Calendar = () => {
  //  Handle Modal
  const [show, setShow] = useState<boolean>(false);
  const onCloseModal = () => {
    setShow(false);
    setEventData({});
    setDateInfo({});
  };
  const onOpenModal = () => setShow(true);
  const [isEditable, setIsEditable] = useState<boolean>(false);

  //   Event data
  const [events, setEvents] = useState<EventInput[]>([...EventsData]);
  const [eventData, setEventData] = useState<EventInput>({});
  const [dateInfo, setDateInfo] = useState<any>({});

  // on date click
  const onDateClick = (arg: DateClickArg) => {
    setDateInfo(arg);
    onOpenModal();
    setIsEditable(false);
  };

  // on event click
  const onEventClick = (arg: EventClickArg) => {
    const event = {
      id: String(arg.event.id),
      title: arg.event.title,
      className: arg.event.classNames[0],
    };
    setEventData(event);
    onOpenModal();
    setIsEditable(true);
  };

  //  On Add event
  const onAddEvent = (data: any) => {
    const modifiedEvents = [...events];
    const event = {
      id: String(modifiedEvents.length + 1),
      title: data.title,
      start: Object.keys(dateInfo).length !== 0 ? dateInfo.date : new Date(),
      className: data.className,
    };
    modifiedEvents.push(event);
    setEvents(modifiedEvents);
    onCloseModal();
  };

  //   On Update event
  const onUpdateEvent = (data: any) => {
    const modifiedEvents = [...events];
    const idx = modifiedEvents.findIndex((e: any) => e["id"] === eventData!.id);
    modifiedEvents[idx]["title"] = data.title;
    modifiedEvents[idx]["className"] = data.className;
    setEvents(modifiedEvents);
    onCloseModal();
    setIsEditable(false);
  };

  //   On remove event
  const onRemoveEvent = () => {
    var modifiedEvents = [...events];
    const idx = modifiedEvents.findIndex((e: any) => e["id"] === eventData!.id);
    modifiedEvents.splice(idx, 1);
    setEvents(modifiedEvents);
    onCloseModal();
  };

  // create new event
  const createNewEvent = () => {
    setIsEditable(false);
    onOpenModal();
  };

  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  const theme = useMantineTheme();

  return (
    <Layout>
      <Box
        style={{
          backgroundColor: dark ? theme.colors.dark[0] : theme.colors.white[2],
        }}
        className="container"
      >
        <div className="page_titlebox">
          <h4
            style={{
              color: dark ? theme.colors.grey200[6] : theme.colors.grey800[4],
            }}
            className="page_title"
          >
            Calendar
          </h4>
        </div>

        <IntroCard createNewEvent={createNewEvent} />
        <CalendarComponent
          onDateClick={onDateClick}
          onEventClick={onEventClick}
          events={events}
        />

        {/* add new event modal */}
        {show ? (
          <AddEditEvent
            isOpen={show}
            onClose={onCloseModal}
            isEditable={isEditable}
            eventData={eventData}
            onUpdateEvent={onUpdateEvent}
            onRemoveEvent={onRemoveEvent}
            onAddEvent={onAddEvent}
          />
        ) : null}
      </Box>
    </Layout>
  );
};

export default Calendar;

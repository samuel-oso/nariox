import { EventInput } from "@fullcalendar/core";

const EventsData: EventInput[] = [
  {
    id: "1",
    title: "Developers meeting",
    start: new Date(),
    className: "bg-success",
  },
  {
    id: "2",
    title: "Lunch break",
    start: new Date().setDate(new Date().getDate() + 13),
    className: "bg-primary",
  },
  {
    id: "3",
    title: "Client negotiation",
    start: new Date().setDate(new Date().getDate() + 8),
    end: new Date().setDate(new Date().getDate()),
    className: "bg-danger",
  },
  {
    id: "4",
    title: "Watch a movie",
    start: new Date().setDate(new Date().getDate() + 3),
    end: new Date().setDate(new Date().getDate()),
    className: "bg-primary",
  },
  {
    id: "5",
    title: "Frontend Eng",
    start: new Date().setDate(new Date().getDate() + 2),
    className: "bg-warning",
  },
  {
    id: "6",
    title: "Date with babe",
    start: new Date().setDate(new Date().getDate() + 21),
    className: "bg-success",
  },
  {
    id: "7",
    title: "UI Designers",
    start: new Date().setDate(new Date().getDate() + 17),
    className: "bg-danger",
  },
];

export { EventsData };

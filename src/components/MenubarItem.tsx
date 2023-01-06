import { Key, useState } from "react";
import { IconChevronDown } from "@tabler/icons";
import { Collapse } from "@mantine/core";
import { Link, useLocation } from "react-router-dom";

export default function MenubarItem({ item }: { item: any }) {
  const [opened, setOpened] = useState(false);

  const { pathname } = useLocation();

  if (item.children) {
    return (
      <>
        <div
          className={opened ? "menubar__title menuActive" : "menubar__title"}
          onClick={() => setOpened((o) => !o)}
        >
          {item.icon}
          <p>{item.label}</p>
          <IconChevronDown
            className={opened ? "menuCollapse open menuActive" : "menuCollapse"}
          />
        </div>
        <Collapse in={opened}>
          <div className="submenubar__content">
            {item.children.map((child: any, index: Key | null | undefined) => (
              <Link
                to={`${child.url}`}
                key={index}
                className={`submenubar__content__title ${
                  pathname === child.url && "submenubar__content__titleActive"
                }`}
              >
                {child.label}
              </Link>
            ))}
          </div>
        </Collapse>
      </>
    );
  } else {
    return (
      <Link
        to={`${item.url}`}
        className={`menubar__item ${pathname === item.url && "menuActive"}`}
      >
        {item.icon}
        <p>{item.label}</p>
      </Link>
    );
  }
}

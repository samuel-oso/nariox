import { Key, useState } from "react";
import { IconChevronDown } from "@tabler/icons";
import {
  Collapse,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";
import { Link, useLocation } from "react-router-dom";

export default function MenubarItem({ item }: { item: any }) {
  const [opened, setOpened] = useState(false);

  const { pathname } = useLocation();

  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  const theme = useMantineTheme();

  if (item.children) {
    return (
      <>
        <div
          className={opened ? "menuItem" : "menuItem"}
          onClick={() => setOpened((o) => !o)}
        >
          <div className="menuItem_label">
            {item.icon}
            <p>{item.label}</p>
          </div>

          <IconChevronDown
            size={16}
            className={opened ? "menuCollapse open" : "menuCollapse"}
          />
        </div>
        <Collapse in={opened}>
          <div className="menuItem_sub">
            {item.children.map((child: any, index: Key | null | undefined) => (
              <Link
                to={`${child.url}`}
                key={index}
                className={`menuItem_subLabel ${
                  pathname === child.url && "submenubar__content__titleActive"
                }`}
                style={{
                  color: dark
                    ? theme.colors.grey900[7]
                    : theme.colors.grey700[4],
                }}
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
        className={`menuItem_labelLink ${
          pathname === item.url && "menuActive"
        }`}
        style={{
          color: dark ? theme.colors.grey900[7] : theme.colors.grey700[4],
        }}
      >
        {item.icon}
        <p>{item.label}</p>
      </Link>
    );
  }
}

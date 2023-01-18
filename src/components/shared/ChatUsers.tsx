import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Input,
  useMantineColorScheme,
  useMantineTheme,
  Box,
} from "@mantine/core";
import classNames from "classnames";
import "../../styles/pages/Chat.css";
import { USERS, ChatUserType } from "../../assets/data/ChatData";
import profilePic from "../../assets/images/avatar-2.jpg";
import { IconDotsVertical, IconSearch } from "@tabler/icons";

interface ChatUsersProps {
  onUserSelect: (value: ChatUserType) => void;
}

// ChatUsers
const ChatUsers = ({ onUserSelect }: ChatUsersProps) => {
  const [user, setUser] = useState<ChatUserType[]>([...USERS]);
  const [selectedUser, setSelectedUser] = useState<ChatUserType>(USERS[1]);

  /**
   * Search the user
   * @param {*} text
   */
  const search = (text: string) => {
    setUser(
      text
        ? [...USERS].filter(
            (u) => u.name!.toLowerCase().indexOf(text.toLowerCase()) >= 0
          )
        : [...USERS]
    );
  };

  /**
   * Activates the user
   * @param {*} user
   */
  const activateUser = (user: ChatUserType) => {
    setSelectedUser(user);
    if (onUserSelect) {
      onUserSelect(user);
    }
  };

  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  const theme = useMantineTheme();

  return (
    <Box
      sx={{
        backgroundColor: dark ? theme.colors.secondary[1] : "white",
        border: dark ? "none" : "1px solid var(--mantine-color-grey300-4)",
      }}
      className="chat_wrapper"
    >
      {/* Profile Name & DropDown */}
      <div className="chat_profile">
        <img src={profilePic} alt="profile img" />
        <h5>Samuel J</h5>
        <div className="profile_svg">
          <IconDotsVertical size={16} />
        </div>
      </div>

      {/* Search for Each Chat */}
      <div className="chat_search">
        <Input
          type="search"
          placeholder="Search..."
          icon={<IconSearch size={16} />}
          onKeyUp={(e: any) => search(e.target.value)}
        />
      </div>

      {/* List of each chat */}
      <div className="chatUsers_wrapper">
        {(user || []).map((user, index) => {
          return (
            <Link
              to="#"
              key={index}
              onClick={(e: any) => {
                activateUser(user);
              }}
              className="chatUsers_link"
            >
              <div
                className={classNames("chatUsers", {
                  "": user.id === selectedUser.id,
                })}
              >
                <div className="chatUsers_profile">
                  <span
                    className={classNames("chatUser_status", {
                      "bg-success": user.userStatus === "online",
                      "bg-danger": user.userStatus === "busy",
                      "bg-warning": user.userStatus === "away",
                      "bg-away": user.userStatus === "offline",
                    })}
                  />
                  <img src={user.avatar} alt="userchat" />
                </div>
                <div className="chatUsers_msg">
                  <h5>
                    <span>{user.lastMessageOn}</span>
                    {user.name}
                  </h5>
                  <div className="chatUsers_msgText">
                    {user.totalUnread !== 0 && <span>{user.totalUnread}</span>}
                    <p
                      className={classNames("", {
                        "text-success": user.totalUnread,
                      })}
                    >
                      {user.lastMessage}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </Box>
  );
};

export default ChatUsers;

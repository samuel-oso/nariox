import { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "@mantine/core";
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

  return (
    <>
      <div className="chatCard">
        {/* Profile Name & DropDown */}
        <div className="flex items-center justify-between border-bottom pb-3">
          <div className="chatUsers-Profile">
            <img
              src={profilePic}
              className="rounded-circle"
              height="48"
              width="48"
              alt="ChatProfilePic"
            />
            <h5 className="">Micheal J</h5>
          </div>
          <div>
            <IconDotsVertical className="cursor-pointer text-lg" />
          </div>
        </div>

        {/* Search for Each Chat */}
        <div className="chatSearch">
          <Input
            type="search"
            placeholder="Search..."
            icon={<IconSearch />}
            onKeyUp={(e: any) => search(e.target.value)}
          />
        </div>

        {/* List of each chat */}
        <div className="fullUserList">
          {(user || []).map((user, index) => {
            return (
              <Link
                to="#"
                key={index}
                className="text-body"
                onClick={(e: any) => {
                  activateUser(user);
                }}
              >
                <div
                  className={classNames("flex", "items-start", "p-2", "gap-3", {
                    "bg-light": user.id === selectedUser.id,
                  })}
                >
                  <div className="relative">
                    <span
                      className={classNames("user-status", {
                        "bg-success": user.userStatus === "online",
                        "bg-danger": user.userStatus === "busy",
                        "bg-warning": user.userStatus === "away",
                        "bg-away": user.userStatus === "offline",
                      })}
                    />
                    <img
                      src={user.avatar}
                      className="rounded-circle"
                      height="48"
                      width="58"
                      alt="userchat"
                    />
                  </div>
                  <div className="w-full">
                    <h5
                      style={{ color: "var(--bs-gray-dark)" }}
                      className="font-medium"
                    >
                      <span className="float-right text-xs">
                        {user.lastMessageOn}
                      </span>
                      {user.name}
                    </h5>
                    <p
                      className="mt-1 mb-0"
                      style={{ color: "var(--bs-gray-300)" }}
                    >
                      {user.totalUnread !== 0 && (
                        <span className="float-right bg-danger text-white px-1 rounded text-xs">
                          {user.totalUnread}
                        </span>
                      )}
                      <span
                        className={classNames("w-72", {
                          "text-success": user.totalUnread,
                        })}
                      >
                        {user.lastMessage}
                      </span>
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ChatUsers;

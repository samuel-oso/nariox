import React, { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import classNames from "classnames";
import * as yup from "yup";
import {
  Loader,
  Center,
  Box,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";
import { yupResolver } from "@hookform/resolvers/yup";
import FormInput from "../contexts/FormInput";
import {
  IconPhonePlus,
  IconVideo,
  IconDotsVertical,
  IconChecks,
  IconMoodSmile,
  IconPaperclip,
  IconCamera,
  IconSend,
} from "@tabler/icons";

// default data
import {
  CHATHISTORY,
  ChatUserType,
  ChatMessage,
  MessageItem,
} from "../../assets/data/ChatData";

// images
import avatar1 from "../../assets/images/avatar-1.jpg";

interface ChatHeaderProps {
  selectedUser: ChatUserType;
}

const ChatHeader = ({ selectedUser }: ChatHeaderProps) => {
  return (
    <>
      <div className="chatArea_profile">
        <div className="chatArea_img">
          <img src={selectedUser.avatar} alt="chat area img" />
          <div>
            <h5>{selectedUser.name}</h5>
            <p>Online</p>
          </div>
        </div>
        <div className="chatArea_icons">
          <IconPhonePlus />
          <IconVideo />
          <IconDotsVertical />
        </div>
      </div>
    </>
  );
};

interface UserMessageProps {
  message: MessageItem;
  toUser: ChatUserType;
}
// user messages
const UserMessage = ({ message, toUser }: UserMessageProps) => {
  return (
    <div>
      {(message.messages || []).map((item, index) => {
        return (
          <li
            key={index}
            className={classNames("", {
              odd: message.from.id === toUser.id,
              "mb-1 odd":
                message.messages.length > 1 &&
                index !== message.messages.length - 1,
            })}
          >
            <div>
              <div
                className={classNames("", {
                  chat_textwrap: message.from.id === toUser.id,
                })}
              >
                {item.type === "text" && (
                  <div className="chat_text">
                    <p>{item.value}</p>
                  </div>
                )}
              </div>
              {index === message.messages.length - 1 && (
                <p
                  style={{
                    fontSize: "12px",
                    marginBottom: "0px",
                    marginTop: "4px",
                  }}
                >
                  {message.sendOn}

                  {message.from.id === toUser.id && (
                    <i>
                      <IconChecks size={14} className="text-success ml-1" />
                    </i>
                  )}
                </p>
              )}
            </div>
          </li>
        );
      })}
    </div>
  );
};

interface ChatAreaProps {
  selectedUser: ChatUserType;
}

// ChatArea
const ChatArea = ({ selectedUser }: ChatAreaProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  const [toUser] = useState<ChatUserType>({
    id: 9,
    name: "Samuel J",
    avatar: avatar1,
  });

  /*
   *  Fetches the messages for selected user
   */
  const getMessagesForUser = useCallback(() => {
    if (selectedUser) {
      setLoading(true);
      setTimeout(() => {
        const modifiedChatHistory = [...CHATHISTORY].map((record) => {
          const test = {
            id: record.id,
            day: record.day,
            messages: [...record.messages].filter(
              (m) =>
                (m.to.id === toUser.id && m.from.id === selectedUser.id) ||
                (toUser.id === m.from.id && m.to.id === selectedUser.id)
            ),
          };
          return test;
        });
        setChatHistory([...modifiedChatHistory]);
        setLoading(false);
      }, 750);
    }
  }, [selectedUser, toUser.id]);

  useEffect(() => {
    getMessagesForUser();
  }, [getMessagesForUser]);

  /*
   * form validation schema
   */
  const schemaResolver = yupResolver(
    yup.object().shape({
      newMessage: yup.string().required("Please enter your messsage"),
    })
  );

  /*
   * form methods
   */
  const methods = useForm({ resolver: schemaResolver });
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
    reset,
  } = methods;

  /**
   * sends the chat message
   */
  const sendChatMessage = (values: { newMessage?: string }) => {
    let newUserMessages = [...chatHistory[chatHistory.length - 1].messages];
    newUserMessages.push({
      id: chatHistory[chatHistory.length - 1].messages.length + 1,
      from: toUser,
      to: selectedUser,
      messages: [{ type: "text", value: values["newMessage"] }],
      sendOn: new Date().getHours() + ":" + new Date().getMinutes(),
    });

    const modifiedChatHistory = [...chatHistory].map((record, index) => {
      const test = {
        id: record.id,
        day: record.day,
        messages:
          index === chatHistory.length - 1 ? newUserMessages : record.messages,
      };
      return test;
    });
    setChatHistory([...modifiedChatHistory]);
    reset();
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
      {loading ? (
        <Center
          style={{
            width: "100%",
            minHeight: 680,
          }}
        >
          {loading && <Loader />}
        </Center>
      ) : (
        <>
          <ChatHeader selectedUser={selectedUser} />
          <div style={{ marginTop: "4px" }}>
            <ul className="chatArea_field">
              {(chatHistory || []).map((item, index) => {
                return (
                  <React.Fragment key={index}>
                    <li>
                      <hr />
                      <h4>{item.day}</h4>
                    </li>
                    {(item.messages || []).map((message, index) => {
                      return (
                        <UserMessage
                          key={index}
                          message={message}
                          toUser={toUser}
                        />
                      );
                    })}
                  </React.Fragment>
                );
              })}
            </ul>
            <div className="chatsend_wrap">
              <form
                noValidate
                name="chat-form"
                id="chat-form"
                className="chatsend_form"
                onSubmit={handleSubmit(sendChatMessage)}
              >
                <FormInput
                  type="text"
                  name="newMessage"
                  placeholder="Enter your text"
                  register={register}
                  key="newMessage"
                  errors={errors}
                  control={control}
                  style={{}}
                />
                <div className="chatsend_icons">
                  <i>
                    <IconMoodSmile size={25} />
                  </i>
                  <i>
                    <IconPaperclip size={25} />
                  </i>
                  <i>
                    <IconCamera size={25} />
                  </i>
                  <i>
                    <IconSend size={25} />
                  </i>
                </div>
              </form>
            </div>
          </div>
        </>
      )}
    </Box>
  );
};

export default ChatArea;

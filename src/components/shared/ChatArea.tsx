import React, { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Card, Dropdown, Row, Col } from "react-bootstrap";
import classNames from "classnames";
import * as yup from "yup";
import { Loader, Center } from "@mantine/core";
import { yupResolver } from "@hookform/resolvers/yup";
import FormInput from "../contexts/FormInput";
import { IconPhonePlus, IconVideo, IconDotsVertical } from "@tabler/icons";

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
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src={selectedUser.avatar}
            className="rounded-circle"
            height="48"
            width="48"
            alt="ChatProfilePic"
          />
          <div>
            <h5
              style={{ color: "var(--bs-gray-dark)" }}
              className="font-medium"
            >
              {selectedUser.name}
            </h5>
            <p style={{ color: "var(--bg-600)" }}>Online</p>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <div className="chatArea-icons">
            <IconPhonePlus />
          </div>
          <div className="chatArea-icons">
            <IconVideo />
          </div>
          <div className="chatArea-icons">
            <IconDotsVertical className="cursor-pointer text-lg" />
          </div>
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
    <>
      {(message.messages || []).map((item, index) => {
        return (
          <li
            key={index}
            className={classNames("clearfix", {
              odd: message.from.id === toUser.id,
              "mb-1 odd":
                message.messages.length > 1 &&
                index !== message.messages.length - 1,
            })}
          >
            <div className="conversation-text ml-0">
              <div
                className={classNames("flex", {
                  "justify-end": message.from.id === toUser.id,
                })}
              >
                {message.from.id === toUser.id && (
                  <Dropdown className="conversation-actions">
                    <Dropdown.Toggle
                      as="a"
                      className="cursor-pointer text-dark pe-1"
                    >
                      <i className="bi bi-three-dots-vertical fs-14"></i>
                    </Dropdown.Toggle>
                    <Dropdown.Menu align="end">
                      <Dropdown.Item>
                        <i className="bi bi-reply fs-18 me-2"></i>Reply
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <i className="bi bi-star fs-18 me-2"></i>Reply
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <i className="bi bi-trash fs-18 me-2"></i>Delete
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <i className="bi bi-files fs-18 me-2"></i>Copy
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                )}

                {item.type === "text" && (
                  <div className="ctext-wrap">
                    <p>{item.value}</p>
                  </div>
                )}

                {item.type === "file" && (
                  <Card className="mb-1 shadow-none border text-start">
                    <div className="p-2">
                      <Row className="align-items-center">
                        <Col className="col-auto">
                          <div className="avatar-sm bg-primary text-white">
                            <span className="avatar-title rounded">.ZIP</span>
                          </div>
                        </Col>
                        <Col className="ps-0">
                          <Link to="#" className="text-muted fw-bold">
                            {item.value.file}
                          </Link>
                          <p className="mb-0">{item.value.size}</p>
                        </Col>
                        <Col className="col-auto">
                          <Link to="#" className="ps-3 fs-24">
                            <i className="bi bi-arrow-down-square"></i>
                          </Link>
                        </Col>
                      </Row>
                    </div>
                  </Card>
                )}

                {message.from.id !== toUser.id && (
                  <Dropdown className="conversation-actions">
                    <Dropdown.Toggle
                      as="a"
                      className="cursor-pointer text-dark ps-1"
                    >
                      <i className="bi bi-three-dots-vertical fs-14"></i>
                    </Dropdown.Toggle>
                    <Dropdown.Menu align="start">
                      <Dropdown.Item>
                        <i className="bi bi-reply fs-18 me-2"></i>Reply
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <i className="bi bi-star fs-18 me-2"></i>Reply
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <i className="bi bi-trash fs-18 me-2"></i>Delete
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <i className="bi bi-files fs-18 me-2"></i>Copy
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                )}
              </div>
              {index === message.messages.length - 1 && (
                <p className="text-muted fs-12 mb-0 mt-1">
                  {message.sendOn}
                  {message.from.id === toUser.id && (
                    <i className="bi bi-check2-all ms-1 text-success"></i>
                  )}
                </p>
              )}
            </div>
          </li>
        );
      })}
    </>
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
    name: "Shreyu N",
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

  return (
    <>
      <div className="chatCard">
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
            <div className="mt-1">
              <div>
                <ul className="conversation-list px-0 h-100">
                  {(chatHistory || []).map((item, index) => {
                    return (
                      <React.Fragment key={index}>
                        <li className="position-relative">
                          <hr />
                          <h4>
                            <span className="badge bg-light text-dark position-absolute top-0 start-50 translate-middle">
                              {item.day}
                            </span>
                          </h4>
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
              </div>
              <div className="mt-2 bg-light p-3 rounded">
                <form
                  noValidate
                  name="chat-form"
                  id="chat-form"
                  onSubmit={handleSubmit(sendChatMessage)}
                >
                  <div className="row">
                    <div className="col mb-2 mb-sm-0">
                      <FormInput
                        type="text"
                        name="newMessage"
                        className="border-0"
                        placeholder="Enter your text"
                        register={register}
                        key="newMessage"
                        errors={errors}
                        control={control}
                      />
                    </div>
                    <div className="col-sm-auto">
                      <div className="btn-group">
                        <Link to="#" className="btn btn-light">
                          <i className="bi bi-emoji-smile fs-18"></i>
                        </Link>
                        <Link to="#" className="btn btn-light">
                          <i className="bi bi-paperclip fs-18"></i>
                        </Link>
                        <Link to="#" className="btn btn-light">
                          <i className="bi bi-camera fs-18"></i>
                        </Link>
                        <button
                          type="submit"
                          className="btn btn-success chat-send"
                        >
                          <i className="uil uil-message"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ChatArea;

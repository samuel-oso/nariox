import { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import "../../../styles/pages/Email.css";
import classNames from "classnames";
import LeftBar from "./LeftBar";
import { emails as mails, chatUsers } from "../../../assets/data/EmailData";
import {
  Box,
  Card,
  Button,
  Tooltip,
  useMantineColorScheme,
  useMantineTheme,
  Group,
} from "@mantine/core";
import Layout from "../../../utils/Layout";
import {} from "@mantine/core";
import {
  IconAlertOctagon,
  IconArchive,
  IconChevronLeft,
  IconChevronRight,
  IconStar,
  IconTrash,
} from "@tabler/icons";

const Email = ({ email }: { email: EmailItems }) => {
  return (
    <li className={classNames({ unread: !email.is_read })}>
      <div className="col-mail col-mail-1">
        <div className="checkbox-wrapper-mail">
          <input
            type="checkbox"
            className="form-check-input"
            id={"mail" + email.id}
          />
          <label className="toggle" htmlFor={"mail" + email.id}></label>
        </div>
        <span
          className={classNames("star-toggle", {
            "text-warning": email.is_important,
          })}
        >
          <IconStar size={20} />
        </span>
        <Link to="/apps/email/details" className="title">
          {email.from_name}
          {email.number_of_reply > 1 && <span> ({email.number_of_reply})</span>}
        </Link>
      </div>
      <div className="col-mail col-mail-2">
        <Link to="/apps/email/details" className="subject">
          {email.subject} &nbsp;&ndash;&nbsp;
          <span className="teaser">{email.teaser}</span>
        </Link>
        <div className="date">{email.time}</div>
      </div>
    </li>
  );
};

interface EmailItems {
  id: number;
  from_name: string;
  from_email: string;
  subject: string;
  teaser: string;
  number_of_reply: number;
  is_important: boolean;
  is_read: boolean;
  time: string;
  date: string;
}

// Inbox
const Inbox = () => {
  const [emails] = useState<Array<EmailItems>>(mails);
  const [totalEmails] = useState<number>(mails.length);
  const [startIndex, setStartIndex] = useState<number>(1);
  const [endIndex, setEndIndex] = useState<number>(20);
  const [totalUnreadEmails] = useState<number>(
    mails.filter((e: any) => e.is_read === false).length
  );

  const unreadEmails = emails.filter((email) => !email.is_read);
  const importantEmails = emails.filter((email) => email.is_important);
  const otherEmails = emails.filter(
    (email) => email.is_read && !email.is_important
  );

  /**
   * get start index for other emails
   */
  const getStartIndex = useCallback(
    (index: number) => {
      let start = index - 1;
      if (start === 0) {
        return start;
      } else {
        return start - unreadEmails.length - importantEmails.length;
      }
    },
    [unreadEmails.length, importantEmails.length]
  );

  /**
   * get end index for other emails
   */
  const getEndIndex = useCallback(
    (index: any) => {
      let end = index;
      return end - unreadEmails.length - importantEmails.length;
    },
    [importantEmails.length, unreadEmails.length]
  );

  const [emailList, setEmailList] = useState<EmailItems[]>(
    otherEmails.slice(getStartIndex(startIndex), getEndIndex(endIndex))
  );

  /**
   * Gets the next page
   */
  const getNextPage = () => {
    const startIdx = startIndex + 20;
    const endIdx = endIndex + 20;
    setStartIndex(startIdx);
    setEndIndex(endIdx);
    setEmailList(
      otherEmails.slice(getStartIndex(startIdx), getEndIndex(endIdx))
    );
  };

  /**
   * Gets the prev page
   */
  const getPrevPage = () => {
    const startIdx = startIndex - 20;
    const endIdx = endIndex - 20;
    setStartIndex(startIdx);
    setEndIndex(endIdx);
    setEmailList(
      otherEmails.slice(getStartIndex(startIdx), getEndIndex(endIdx))
    );
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
            Email Inbox
          </h4>
        </div>

        <div className="email-container">
          <Card className="inbox-leftbar">
            <Link to="/apps/email/compose">
              <Button>Compose</Button>
            </Link>

            <LeftBar
              totalUnreadEmails={totalUnreadEmails}
              chatUsers={chatUsers}
            />
          </Card>

          <div className="inbox-rightbar">
            <div className="inbox-rightbar-header">
              <Card style={{ backgroundColor: "white", cursor: "pointer" }}>
                <Tooltip label="Archived">
                  <div style={{ padding: "0.45rem 0.9rem" }}>
                    <IconArchive size={18} />
                  </div>
                </Tooltip>

                <Tooltip label="Spam">
                  <div style={{ padding: "0.45rem 0.9rem" }}>
                    <IconAlertOctagon size={18} />
                  </div>
                </Tooltip>

                <Tooltip label="Delete">
                  <div style={{ padding: "0.45rem 0.9rem" }}>
                    <IconTrash size={18} />
                  </div>
                </Tooltip>
              </Card>

              <Card>
                <p>
                  Showing {startIndex} - {endIndex} of {totalEmails}
                </p>
                <Group>
                  {startIndex === 1 ? (
                    <Button disabled>
                      <IconChevronLeft size={18} />
                    </Button>
                  ) : (
                    <Button onClick={getPrevPage}>
                      <IconChevronLeft size={18} />
                    </Button>
                  )}
                  {endIndex !== totalEmails ? (
                    <Button onClick={getNextPage}>
                      <IconChevronRight size={18} />
                    </Button>
                  ) : (
                    <Button disabled>
                      <IconChevronRight size={18} />
                    </Button>
                  )}
                </Group>
              </Card>
            </div>

            <div>
              {startIndex === 1 && (
                <>
                  <h5 className="mt-4">Unread</h5>
                  <ul className="message-list">
                    {(unreadEmails || []).map((email, idx) => {
                      return <Email email={email} key={idx} />;
                    })}
                  </ul>
                  <h5 className="mt-4">Important</h5>
                  <ul className="message-list">
                    {(importantEmails || []).map((email, idx) => {
                      return <Email email={email} key={idx} />;
                    })}
                  </ul>
                </>
              )}
              <h5 className="mt-4">Everything Else</h5>
              <ul className="message-list">
                {(emailList || []).map((email, idx) => {
                  return <Email email={email} key={idx} />;
                })}
              </ul>
            </div>
          </div>
        </div>
      </Box>
    </Layout>
  );
};

export default Inbox;

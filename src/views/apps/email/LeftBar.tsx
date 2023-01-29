import { Link } from "react-router-dom";
import img1 from "../../../assets/images/avatar-1.jpg";
import "../../../styles/pages/Email.css";
import { ChatUserTypes } from "../../../assets/data/EmailData";
import {
  IconCircle,
  IconInbox,
  IconMailbox,
  IconMailForward,
  IconPhotoStar,
  IconTrash,
} from "@tabler/icons";
import { useMantineColorScheme, useMantineTheme } from "@mantine/core";

interface LeftBarProps {
  totalUnreadEmails?: number;
  chatUsers?: ChatUserTypes[];
  showChatDetails?: boolean;
}

const LeftBar = ({
  totalUnreadEmails,
  chatUsers,
  showChatDetails,
}: LeftBarProps) => {
  const showChat = showChatDetails === undefined && true;

  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  const theme = useMantineTheme();

  return (
    <div
      style={{
        color: dark ? theme.colors.grey900[7] : theme.colors.grey700[4],
      }}
      className="email_leftbar"
    >
      <div className="email_leftbar_list mt-4">
        <Link
          to="#"
          style={{ color: "var(--mantine-color-error-4)", fontWeight: "700" }}
        >
          <IconInbox size={16} />
          Inbox
          <span className="badge bg-danger">{totalUnreadEmails}</span>
        </Link>
        <Link
          style={{
            color: dark ? theme.colors.grey900[7] : theme.colors.grey700[4],
          }}
          to="#"
        >
          <IconPhotoStar size={16} />
          Starred
        </Link>
        <Link
          to="#"
          style={{
            color: dark ? theme.colors.grey900[7] : theme.colors.grey700[4],
          }}
        >
          <IconMailbox size={16} />
          Draft
          <span className="badge bg-info">32</span>
        </Link>
        <Link
          to="#"
          style={{
            color: dark ? theme.colors.grey900[7] : theme.colors.grey700[4],
          }}
        >
          <IconMailForward size={16} />
          Sent Mail
        </Link>
        <Link
          to="#"
          style={{
            color: dark ? theme.colors.grey900[7] : theme.colors.grey700[4],
          }}
        >
          <IconTrash size={16} />
          Trash
        </Link>
      </div>

      <h6>Labels</h6>

      <div className="email_leftbar_list">
        <Link
          to="#"
          style={{
            color: dark ? theme.colors.grey900[7] : theme.colors.grey700[4],
          }}
        >
          <IconCircle size={16} className="text-primary" />
          Web App
        </Link>
        <Link
          to="#"
          style={{
            color: dark ? theme.colors.grey900[7] : theme.colors.grey700[4],
          }}
        >
          <IconCircle size={16} className="text-info" />
          Recharge
        </Link>
        <Link
          to="#"
          style={{
            color: dark ? theme.colors.grey900[7] : theme.colors.grey700[4],
          }}
        >
          <IconCircle size={16} className="text-success" />
          Wallet Balance
        </Link>
        <Link
          to="#"
          style={{
            color: dark ? theme.colors.grey900[7] : theme.colors.grey700[4],
          }}
        >
          <IconCircle size={16} className="text-warning" />
          Friends
        </Link>
        <Link
          to="#"
          style={{
            color: dark ? theme.colors.grey900[7] : theme.colors.grey700[4],
          }}
        >
          <IconCircle size={16} className="text-secondary" />
          Family
        </Link>
      </div>

      {showChat && (
        <>
          <div className="email_leftbar_chat">
            <img
              src={img1}
              alt="profil-img"
              className="avatar-sm rounded-circle"
            />
            <div className="email_leftbar_chatProfile">
              <h5>Nik Patel</h5>
              <small>
                <IconCircle size={13} className="text-success" />
                Active Now
              </small>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default LeftBar;

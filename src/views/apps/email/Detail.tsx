import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Card,
  Button,
  Tooltip,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";
import { IconAlertOctagon, IconArchive, IconTrash } from "@tabler/icons";
import "../../../styles/pages/Email.css";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, ContentState } from "draft-js";
import htmlToDraft from "html-to-draftjs";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import LeftBar from "./LeftBar";
import { emails } from "../../../assets/data/EmailData";
import avatarImg from "../../../assets/images/avatar-2.jpg";
import avatarImg2 from "../../../assets/images/avatar-7.jpg";
import Layout from "../../../utils/Layout";

interface EmailItems {
  avatar: string;
  subject: string;
  from_name: string;
  from_email: string;
  recieved_on: string;
  attachments: [
    { id: number; name: string; size: string; ext: string },
    { id: number; name: string; size: string; ext: string },
    { id: number; name: string; size: string; ext: string }
  ];
}

// EmailDetail
const EmailDetail = () => {
  const [totalUnreadEmails] = useState<number>(
    emails.filter((e: any) => e.is_read === false).length
  );
  const [email] = useState<EmailItems>({
    avatar: avatarImg,
    subject: "Your elite author Graphic Optimization reward is ready!",
    from_name: "Steven Smith",
    from_email: "jonathan@domain.com",
    recieved_on: "Jul 24, 2019, 5:17 AM",
    attachments: [
      { id: 1, name: "Hyper-admin-design.zip", size: "2.3MB", ext: ".zip" },
      { id: 2, name: "Dashboard-design.jpg", size: "0.3MB", ext: ".jpg" },
      { id: 3, name: "Admin-bug-report.mp4", size: "4.1MB", ext: ".mp4" },
    ],
  });

  const [editorState, setEditorState] = useState<any>();

  useEffect(() => {
    const html = `<h3>This is an Air-mode editable area.</h3>
            <ul>
                <li>Select a text to reveal the toolbar.</li>
                <li>Edit rich document on-the-fly, so elastic!</li>
            </ul>
            <p>End of air-mode area</p>`;
    const contentBlock = htmlToDraft(html);
    if (contentBlock) {
      const contentState = ContentState.createFromBlockArray(
        contentBlock.contentBlocks
      );
      setEditorState(EditorState.createWithContent(contentState));
    }
  }, []);

  /**
   * On editor body change
   */
  const onEditorStateChange = (editorStates: any) => {
    setEditorState(editorStates);
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
            Email Detail
          </h4>
        </div>

        <div className="email-container">
          <Card className="inbox-leftbar">
            <Link to="/apps/email/compose">
              <Button>Compose</Button>
            </Link>

            <LeftBar
              showChatDetails={false}
              totalUnreadEmails={totalUnreadEmails}
            />
          </Card>

          <div className="inbox-rightbar">
            <div
              className="inbox-rightbar-header"
              style={{ background: "white", padding: "36px 36px 16px" }}
            >
              <div style={{ backgroundColor: "#f8f9fa", cursor: "pointer" }}>
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
              </div>
            </div>

            <div className="email_content" style={{ background: "white" }}>
              <h5>Hi Bro, How are you?</h5>

              <hr />

              <div className="email_contentProfile">
                <img src={email.avatar} alt={email.from_name} />
                <div>
                  <h6 style={{ padding: "0px" }}>{email.from_name}</h6>
                  <small>From: {email.from_email}</small>
                </div>
                <small style={{ marginLeft: "auto" }}>
                  <small>{email.recieved_on}</small>
                </small>
              </div>

              <p>
                <b>Hi Bro...</b>
              </p>

              <div>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                  eu, pretium quis, sem.
                </p>
                <p>
                  Nulla consequat massa quis enim. Donec pede justo, fringilla
                  vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus
                  ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis
                  eu pede mollis pretium. Integer tincidunt. Cras dapibus.
                  Vivamus elementum semper nisi.
                </p>
                <p>
                  Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor
                  eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante,
                  dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra
                  nulla ut metus varius laoreet. Quisque rutrum. Aenean
                  imperdiet. Etiam ultricies nisi vel augue. Curabitur
                  ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.
                  Maecenas tempus, tellus eget condimentum rhoncus, sem quam
                  semper libero, sit amet adipiscing sem neque sed ipsum. Nam
                  quam nunc, blandit vel, luctus pulvinar,
                </p>
              </div>

              <div className="email_contentSend">
                <img className="sndImg" src={avatarImg2} alt="user img" />
                <Editor
                  editorState={editorState}
                  toolbarClassName="toolbarClassName"
                  wrapperClassName="wrapperClassName"
                  editorClassName="editorClassName"
                  onEditorStateChange={onEditorStateChange}
                />
              </div>

              <div className="email_contentSendBtn">
                <Button className="rounded-pill width-sm">Send</Button>
              </div>
            </div>
          </div>
        </div>
      </Box>
    </Layout>
  );
};

export default EmailDetail;

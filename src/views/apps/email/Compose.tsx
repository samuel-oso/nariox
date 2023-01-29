import { useState, useEffect } from "react";
import "../../../styles/pages/Email.css";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw, ContentState } from "draft-js";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { FormInput, VerticalForm } from "../../../components/contexts/";
import LeftBar from "./LeftBar";
import { emails } from "../../../assets/data/EmailData";
import {
  Box,
  Card,
  Button,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";
import Layout from "../../../utils/Layout";
import { IconMailForward, IconSend } from "@tabler/icons";

const Compose = () => {
  const [editorState, setEditorState] = useState<any>();
  const [totalUnreadEmails] = useState<number>(
    emails.filter((e: any) => e.is_read === false).length
  );

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

  const schemaResolver = yupResolver(
    yup.object().shape({
      to: yup.string().required("Please specify to email"),
      subject: yup.string().required("Please specify subject"),
    })
  );

  /**
   * Handles the save
   * @param {*} event
   * @param {*} values
   */
  const handleEmailSave = (event: any, values: any) => {
    const body = draftToHtml(convertToRaw(editorState.getCurrentContent()));
    console.log({ ...values, body });
  };

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
            Compose Detail
          </h4>
        </div>

        <div className="email-container">
          <Card className="inbox-leftbar">
            <Link to="/apps/email/inbox">
              <Button>Inbox</Button>
            </Link>

            <LeftBar
              showChatDetails={false}
              totalUnreadEmails={totalUnreadEmails}
            />
          </Card>

          <div className="inbox-rightbar">
            <div>
              <VerticalForm
                onSubmit={handleEmailSave}
                resolver={schemaResolver}
              >
                <FormInput
                  type="email"
                  name="to"
                  placeholder="To"
                  containerClass={"mb-3"}
                />
                <FormInput
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  containerClass={"mb-3"}
                />

                <div className="mb-3">
                  <Editor
                    editorState={editorState}
                    toolbarClassName="toolbarClassName"
                    wrapperClassName="wrapperClassName border border-1 border-soft-dark mb-3 card"
                    editorClassName="editorClassName px-2 pt-0"
                    editorStyle={{ minHeight: "358px" }}
                    onEditorStateChange={onEditorStateChange}
                  />
                </div>

                <div className="email_contentSendBtn">
                  <Button
                    className="bg-success"
                    leftIcon={<IconMailForward size={16} />}
                  >
                    Draft
                  </Button>
                  <Button rightIcon={<IconSend size={16} />} type="submit">
                    Send
                  </Button>
                </div>
              </VerticalForm>
            </div>
          </div>
        </div>
      </Box>
    </Layout>
  );
};

export default Compose;

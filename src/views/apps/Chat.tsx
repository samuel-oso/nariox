import { useState } from "react";
import ChatUsers from "../../components/shared/ChatUsers";
import ChatArea from "../../components/shared/ChatArea";
import { USERS, ChatUserType } from "../../assets/data/ChatData";
import {
  Grid,
  Box,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";
import Layout from "../../utils/Layout";

// ChatApp
const Chat = () => {
  const [selectedUser, setSelectedUser] = useState<ChatUserType>(USERS[1]);

  //  On user change
  const onUserChange = (user: ChatUserType) => {
    setSelectedUser(user);
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
            Chat
          </h4>
        </div>

        <Grid>
          <Grid.Col lg={5} xl={3}>
            <ChatUsers onUserSelect={onUserChange} />
          </Grid.Col>
          <Grid.Col lg={7} xl={9}>
            <ChatArea selectedUser={selectedUser} />
          </Grid.Col>
        </Grid>
      </Box>
    </Layout>
  );
};

export default Chat;

import { Datagrid, List, TextField } from "react-admin";

export const PostList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="content" />
      <TextField source="title" />
    </Datagrid>
  </List>
);

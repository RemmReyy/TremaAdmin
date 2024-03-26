import { Admin, Resource } from "react-admin";
import { authProvider, dataProvider } from "./options";
import { PostCreate } from "./create";
import { PostList } from "./list";
import { PostEdit } from "./edit";

export const App = () => (
  <Admin authProvider={authProvider} dataProvider={dataProvider}>
    <Resource
      name="posts"
      create={PostCreate}
      list={PostList}
      edit={PostEdit}
    />
  </Admin>
);

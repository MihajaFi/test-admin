import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
} from "react-admin";
import { dataProvider } from "./dataProvider";
import CreatePost from "./posts/CreatePost";

export const App = () => <Admin dataProvider={dataProvider}>
  <Resource 
    name="users"
    recordRepresentation={"name"}
    edit={EditGuesser}
    show={ShowGuesser}
  ></Resource>
  <Resource 
  name="posts"
  create={CreatePost}
  edit={EditGuesser}
  show={ShowGuesser}
  list={ListGuesser}
  >
  </Resource>

</Admin>;

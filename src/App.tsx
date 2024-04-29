import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
} from "react-admin";
import { Route } from "react-router-dom";
import { dataProvider } from "./dataProvider";
import CreatePost from "./posts/CreatePost";
import ListComment from "./comment/ListComment";

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
    <Route path=":postId/comments" element={<ListComment />} />
  </Resource>

</Admin>;

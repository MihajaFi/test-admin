import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
} from "react-admin";
import { dataProvider } from "./dataProvider";

export const App = () => <Admin dataProvider={dataProvider}>
  <Resource 
    name="users"
    recordRepresentation={"name"}
    edit={EditGuesser}
    show={ShowGuesser}
  ></Resource>
  <Resource 
  name="posts"
  edit={EditGuesser}
  show={ShowGuesser}
  >
  </Resource>
</Admin>;

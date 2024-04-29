import { Datagrid, EmailField, List, TextField } from "react-admin";
import { useParams } from "react-router-dom";


export default function ListComment() {
  const { postId } = useParams();
  return (
    <List resource="comments" filter={{ postId }}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="name" />
        <EmailField source="email" />
      </Datagrid>
    </List>
  );
}
import { List, Datagrid, TextField, EditButton, Edit, SimpleForm, TextInput, DeleteButton,ReferenceField } from 'react-admin';

export default function ListPosts (){  
    return (
    <List >
        <Datagrid>
            <TextField source="id" />
            <TextField source="title" />
            <ReferenceField source="userId" reference='users'>
            <TextField source="username" />
            </ReferenceField>
            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
    )
}
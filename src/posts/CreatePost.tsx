import { Create, ReferenceInput, SimpleForm ,TextInput  } from "react-admin";

export default function CreatePost(){
    return (
        <Create>
            <SimpleForm>
                <ReferenceInput source="userId" reference=""/>
                <TextInput source="title"/>
                
            </SimpleForm>
        </Create>
    )
}

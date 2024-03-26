import {
  Edit,
  TextInput,
  SimpleForm,
  required,
  ImageField,
  ImageInput,
} from "react-admin";

export const PostEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="title" validate={[required()]} />
      <ImageInput source="pictures" accept="image/*">
        <ImageField source="src" title="title" />
      </ImageInput>
      <TextInput source="content" validate={[required()]} />
    </SimpleForm>
  </Edit>
);

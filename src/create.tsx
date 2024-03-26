import {
  Create,
  required,
  TextInput,
  SimpleForm,
  ImageInput,
  ImageField,
} from "react-admin";

export const PostCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="title" validate={[required()]} />
      <ImageInput source="pictures" accept="image/*">
        <ImageField source="src" title="title" />
      </ImageInput>
      <TextInput source="content" validate={[required()]} />
    </SimpleForm>
  </Create>
);

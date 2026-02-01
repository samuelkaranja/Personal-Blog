import { useState } from "react";
import EditorLayout from "../../components/dashboard/editor/EditorLayout";
import PostSettings from "../../components/dashboard/editor/PostSettings";
import TitleInput from "../../components/dashboard/editor/TitleInput";
import ArticleEditor from "../../components/dashboard/editor/ArticleEditor";

const CreatePostPage = () => {
  const [title, setTitle] = useState("");

  return (
    <EditorLayout sidebar={<PostSettings />}>
      <TitleInput value={title} onChange={setTitle} />
      <ArticleEditor />
    </EditorLayout>
  );
};

export default CreatePostPage;

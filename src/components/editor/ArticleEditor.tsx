import { useState } from "react";
//import { useArticleEditor } from "../hooks/useArticleEditor";
import EditorToolbar from "./EditorToolbar";
import EditorContent from "./EditorContent";
//import { saveDraft, publishArticle } from "../services/article.service";
import PostSettings from "./PostSettings";
import { useArticleEditor } from "./useArticleEditor";

export default function ArticleEditor() {
  const editor = useArticleEditor();

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [coverImage, setCoverImage] = useState<string | null>(null);
  const [metaDescription, setMetaDescription] = useState("");

  if (!editor) return null;

  return (
    <div className="flex">
      {/* Main Editor */}
      <div className="flex-1">
        <EditorToolbar editor={editor} />
        <EditorContent editor={editor} title={title} onTitleChange={setTitle} />
      </div>

      {/* Sidebar */}
      <PostSettings
        slug={slug}
        setSlug={setSlug}
        coverImage={coverImage}
        setCoverImage={setCoverImage}
        metaDescription={metaDescription}
        setMetaDescription={setMetaDescription}
        onSaveDraft={() =>
          saveDraft({ title, slug, coverImage, metaDescription, editor })
        }
        onPublish={() =>
          publishArticle({ title, slug, coverImage, metaDescription, editor })
        }
      />
    </div>
  );
}

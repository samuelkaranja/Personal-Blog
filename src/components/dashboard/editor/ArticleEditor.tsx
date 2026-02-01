import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import EditorToolbar from "./EditorToolbar";

const ArticleEditor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Image,
      Link.configure({ openOnClick: false }),
      Placeholder.configure({
        placeholder: "Start writing your amazing story here...",
      }),
    ],
    editorProps: {
      attributes: {
        class:
          "min-h-[500px] text-black border border-gray-200 rounded-lg px-5 py-4 focus:outline-none focus:ring-2 focus:ring-emerald-500 prose prose-lg max-w-none",
      },
    },
  });

  return (
    <div className="max-w-3xl">
      <EditorToolbar editor={editor} />
      <EditorContent editor={editor} />
      <p className="mt-4 text-sm text-gray-400 italic">
        Pro tip: Use markdown-style shortcuts for faster formatting.
      </p>
    </div>
  );
};

export default ArticleEditor;

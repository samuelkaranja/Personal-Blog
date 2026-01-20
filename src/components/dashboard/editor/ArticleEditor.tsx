import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import { TextStyle } from "@tiptap/extension-text-style";
import Link from "@tiptap/extension-link";
import Color from "@tiptap/extension-color";
import Image from "@tiptap/extension-image";
import EditorToolbar from "./EditorToolbar";

const ArticleEditor = () => {
  const editor = useEditor({
    extensions: [StarterKit, Underline, TextStyle, Link, Color, Image],
    content: "<p>Start writing your coding article...</p>",
    editorProps: {
      attributes: {
        class: "min-h-[420px] focus:outline-none prose prose-invert max-w-none",
      },
    },
  });

  if (!editor) return null;

  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
      {/* Toolbar */}
      <EditorToolbar editor={editor} />

      {/* Editor Content */}
      <div className="mt-4">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};

export default ArticleEditor;

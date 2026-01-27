import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import { lowlight } from "lowlight";

export const useArticleEditor = () => {
  return useEditor({
    extensions: [
      StarterKit.configure({
        codeBlock: false, // disable default
      }),
      CodeBlockLowlight.configure({
        lowlight,
      }),
      Image.configure({
        inline: false,
        allowBase64: false,
      }),
      Link.configure({
        openOnClick: false,
      }),
    ],
    content: "",
    editorProps: {
      attributes: {
        class: "prose prose-lg max-w-none focus:outline-none",
      },
    },
  });
};

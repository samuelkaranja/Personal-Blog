import { Editor } from "@tiptap/react";

type EditorToolbarProps = {
  editor: Editor | null;
};

const EditorToolbar = ({ editor }: EditorToolbarProps) => {
  if (!editor) return null;

  const buttonClass =
    "px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 transition text-sm";

  return (
    <div className="flex flex-wrap gap-2 border-b border-white/5 pb-3">
      <button
        className={buttonClass}
        onClick={() => editor.chain().focus().toggleBold().run()}
      >
        B
      </button>

      <button
        className={buttonClass}
        onClick={() => editor.chain().focus().toggleItalic().run()}
      >
        I
      </button>

      <button
        className={buttonClass}
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
      >
        H1
      </button>

      <button
        className={buttonClass}
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
      >
        H2
      </button>

      <button
        className={buttonClass}
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
      >
        {"</>"}
      </button>
    </div>
  );
};

export default EditorToolbar;

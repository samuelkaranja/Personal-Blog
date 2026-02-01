import { Editor } from "@tiptap/react";

type Props = {
  editor: Editor | null;
};

const EditorToolbar = ({ editor }: Props) => {
  if (!editor) return null;

  const buttonClass = (active = false) =>
    `px-3 py-1 rounded text-sm font-medium transition
     ${active ? "bg-blue-100 text-blue-600" : "hover:bg-gray-100"}`;

  return (
    <div className="flex flex-wrap items-center justify-center gap-1 p-2 border rounded-lg text-black bg-white shadow-sm mb-4 sticky top-4 z-10">
      {/* Text styles */}
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={buttonClass(editor.isActive("bold"))}
      >
        B
      </button>

      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={buttonClass(editor.isActive("italic"))}
      >
        I
      </button>

      {/* Headings */}
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={buttonClass(editor.isActive("heading", { level: 1 }))}
      >
        H1
      </button>

      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={buttonClass(editor.isActive("heading", { level: 2 }))}
      >
        H2
      </button>

      {/* Lists */}
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={buttonClass(editor.isActive("bulletList"))}
      >
        • List
      </button>

      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={buttonClass(editor.isActive("orderedList"))}
      >
        1. List
      </button>

      {/* Quote */}
      <button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={buttonClass(editor.isActive("blockquote"))}
      >
        “ ”
      </button>

      {/* Code */}
      <button
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={buttonClass(editor.isActive("codeBlock"))}
      >
        {"</>"}
      </button>

      {/* Divider */}
      <button
        onClick={() => editor.chain().focus().setHorizontalRule().run()}
        className={buttonClass()}
      >
        ―
      </button>

      {/* Link */}
      <button
        onClick={() => {
          const url = prompt("Enter URL");
          if (url) {
            editor
              .chain()
              .focus()
              .extendMarkRange("link")
              .setLink({ href: url })
              .run();
          }
        }}
        className={buttonClass(editor.isActive("link"))}
      >
        🔗
      </button>

      {/* Image */}
      <button
        onClick={() => {
          const url = prompt("Enter image URL");
          if (url) {
            editor.chain().focus().setImage({ src: url }).run();
          }
        }}
        className={buttonClass()}
      >
        🖼
      </button>

      {/* Undo / Redo */}
      <button
        onClick={() => editor.chain().focus().undo().run()}
        className={buttonClass()}
      >
        ↺
      </button>

      <button
        onClick={() => editor.chain().focus().redo().run()}
        className={buttonClass()}
      >
        ↻
      </button>
    </div>
  );
};

export default EditorToolbar;

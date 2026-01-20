import { Editor } from "@tiptap/react";

type Props = {
  editor: Editor | null;
};

const EditorToolbar = ({ editor }: Props) => {
  if (!editor) return null;

  const btn =
    "px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 transition text-sm";

  // Helper functions
  const addImage = () => {
    const url = window.prompt("Enter image URL");
    if (url) editor.chain().focus().setImage({ src: url }).run();
  };

  const addLink = () => {
    const url = window.prompt("Enter link URL");
    if (url) editor.chain().focus().setLink({ href: url }).run();
  };

  const removeLink = () => editor.chain().focus().unsetLink().run();

  const setTextColor = () => {
    const color = window.prompt("Enter a hex color (e.g., #ff0000)");
    if (color) editor.chain().focus().setColor(color).run();
  };

  return (
    <div className="flex flex-wrap gap-2 border-b border-white/5 pb-3">
      {/* Text styles */}
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={btn}
      >
        B
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={btn}
      >
        I
      </button>
      <button
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        className={btn}
      >
        U
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={btn}
      >
        S
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCode().run()}
        className={btn}
      >
        {"</>"} Inline
      </button>

      {/* Headings */}
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={btn}
      >
        H1
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={btn}
      >
        H2
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={btn}
      >
        H3
      </button>

      {/* Lists */}
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={btn}
      >
        • List
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={btn}
      >
        1. List
      </button>

      {/* Block elements */}
      <button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={btn}
      >
        ❝ Blockquote
      </button>
      <button
        onClick={() => editor.chain().focus().setHorizontalRule().run()}
        className={btn}
      >
        ― HR
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={btn}
      >
        {"</>"} Code Block
      </button>

      {/* Links */}
      <button onClick={addLink} className={btn}>
        🔗 Link
      </button>
      <button onClick={removeLink} className={btn}>
        ❌ Unlink
      </button>

      {/* Image */}
      <button onClick={addImage} className={btn}>
        🖼️ Image
      </button>

      {/* Text color */}
      <button onClick={setTextColor} className={btn}>
        🎨 Color
      </button>
    </div>
  );
};

export default EditorToolbar;

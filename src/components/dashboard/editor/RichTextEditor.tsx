import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

type RichTextEditorProps = {
  onChange?: (content: string) => void;
};

const RichTextEditor = ({ onChange }: RichTextEditorProps) => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Start writing your coding article...</p>",
    editorProps: {
      attributes: {
        class: "min-h-[400px] focus:outline-none prose prose-invert max-w-none",
      },
    },
    onUpdate({ editor }) {
      onChange?.(editor.getHTML());
    },
  });

  return (
    <div className="mt-4">
      <EditorContent editor={editor} />
    </div>
  );
};

export default RichTextEditor;

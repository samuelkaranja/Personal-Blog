import { EditorContent as TiptapContent } from "@tiptap/react";

export default function EditorContent({ editor }: any) {
  if (!editor) return null;

  return (
    <div className="min-h-[70vh] px-16 py-10">
      <input
        placeholder="Enter article title..."
        className="w-full text-5xl font-bold mb-6 outline-none placeholder-gray-300"
      />

      <TiptapContent editor={editor} />
    </div>
  );
}

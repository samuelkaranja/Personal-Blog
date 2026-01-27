export default function EditorToolbar({ editor }: any) {
  if (!editor) return null;

  return (
    <div className="fixed top-20 left-1/2 -translate-x-1/2 bg-white shadow-md rounded-xl flex gap-2 px-4 py-2 z-50">
      <button onClick={() => editor.chain().focus().toggleBold().run()}>
        B
      </button>

      <button onClick={() => editor.chain().focus().toggleItalic().run()}>
        I
      </button>

      <button onClick={() => editor.chain().focus().toggleCodeBlock().run()}>
        {"</>"}
      </button>

      <button
        onClick={() => {
          const url = prompt("Enter URL");
          if (url) {
            editor.chain().focus().setLink({ href: url }).run();
          }
        }}
      >
        🔗
      </button>

      <button
        onClick={() => {
          const fileInput = document.createElement("input");
          fileInput.type = "file";
          fileInput.accept = "image/*";
          fileInput.onchange = async () => {
            const file = fileInput.files?.[0];
            if (!file) return;

            // Upload handled next
          };
          fileInput.click();
        }}
      >
        🖼
      </button>
    </div>
  );
}

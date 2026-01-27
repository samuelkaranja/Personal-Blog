interface Props {
  slug: string;
  setSlug: (v: string) => void;
  coverImage: string | null;
  setCoverImage: (v: string) => void;
  metaDescription: string;
  setMetaDescription: (v: string) => void;
  onSaveDraft: () => void;
  onPublish: () => void;
}

export default function PostSettings({
  slug,
  setSlug,
  coverImage,
  setCoverImage,
  metaDescription,
  setMetaDescription,
  onSaveDraft,
  onPublish,
}: Props) {
  return (
    <aside className="w-[360px] border-l px-6 py-6 space-y-6">
      <h3 className="font-semibold">Post Settings</h3>

      {/* Slug */}
      <div>
        <label className="text-sm">Article Slug</label>
        <input
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
          className="input"
        />
      </div>

      {/* Cover Image */}
      <div>
        <label className="text-sm">{coverImage}</label>
        <button className="btn-outline">Replace Image</button>
      </div>

      {/* Meta */}
      <div>
        <label className="text-sm">Meta Description</label>
        <textarea
          value={metaDescription}
          onChange={(e) => setMetaDescription(e.target.value)}
          maxLength={160}
          className="textarea"
        />
      </div>

      {/* Actions */}
      <button onClick={onSaveDraft} className="btn-secondary w-full">
        Save Draft
      </button>

      <button onClick={onPublish} className="btn-primary w-full">
        Publish Article
      </button>
    </aside>
  );
}

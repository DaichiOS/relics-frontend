export function PageHeader({ heading }: { heading: string }) {
  return (
    <div className="mb-8 border-b border-amber-200 pb-2">
      <h2 className="font-serif text-2xl font-bold text-amber-900 flex items-center">
        <span className="mr-2">📚</span> {heading}
      </h2>
    </div>
  );
}
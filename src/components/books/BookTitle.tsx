// This is a simple React component that takes a title prop displays a book title.
export function BookTitle({ title }: { title: string }) {
    return <h3 className="font-semibold text-lg">{title}</h3>
}
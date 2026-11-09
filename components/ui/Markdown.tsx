import ReactMarkdown from "react-markdown";

/** Raw HTML in Markdown stays escaped because rehype-raw is deliberately not used. */
export default function Markdown({ children }: { children: string }) {
  return (
    <div className="prose-content">
      <ReactMarkdown>{children}</ReactMarkdown>
    </div>
  );
}

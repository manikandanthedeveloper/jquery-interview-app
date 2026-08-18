import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

interface Props {
	code: string;
	language?: string;
}

export default function CodeBlock({ code, language = "javascript" }: Props) {
	return (
		<SyntaxHighlighter
			language={language}
			style={oneDark}
			showLineNumbers
			wrapLongLines
		>
			{code}
		</SyntaxHighlighter>
	);
}

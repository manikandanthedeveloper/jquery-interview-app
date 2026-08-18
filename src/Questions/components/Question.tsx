import type IQuestion from "../types";

interface Props {
	question: IQuestion;
}

export default function Question({ question }: Props) {
	const { title, category, answer } = question;

	return (
		<div className="border border-gray-300 rounded-none p-5 mb-5 bg-white">
			<div className="flex justify-between items-center mb-2">
				<h2 className="text-xl font-bold">{title}</h2>
			</div>
			<p className="text-sm text-gray-500 mb-2">{category}</p>

			<div
				className="text-gray-700 gap-y-4 flex flex-col"
				dangerouslySetInnerHTML={{ __html: answer }}
			></div>
		</div>
	);
}

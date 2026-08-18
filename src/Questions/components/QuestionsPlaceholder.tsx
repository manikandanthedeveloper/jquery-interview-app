import QuestionPlaceholder from "./QuestionPlaceholder";

function QuestionsPlaceholder() {
	return (
		<>
			{Array.from({ length: 5 }).map((_, index) => (
				<QuestionPlaceholder key={index} />
			))}
		</>
	);
}

export default QuestionsPlaceholder;

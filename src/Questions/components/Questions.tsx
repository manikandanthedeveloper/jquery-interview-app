import type IQuestionProps from "../types";
import Question from "./Question";

const Questions = ({ questions }: { questions: IQuestionProps[] }) => {
	return (
		<div>
			{questions.map((question) => (
				<Question question={question} key={question.id} />
			))}
		</div>
	);
};

export default Questions;

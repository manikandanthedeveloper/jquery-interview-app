import ErrorMessage from "../components/errorState/ErrorMessage";
import QuestionsPlaceholder from "../Questions/components/QuestionsPlaceholder";
import Questions from "../Questions/components/Questions";
import { useQuestions } from "../Questions/hooks/useQuestions";
import SearchQuestion from "../Questions/components/SearchQuestion";
// import Category from "../Questions/components/Category";

const QuestionsPage = () => {
	const {
		visibleQuestions,
		hasMore,
		handleLoadMore,
		onSearch,
		refetch,
		loading,
		error,
	} = useQuestions();

	if (error) {
		return (
			<div className="max-w-7xl mx-auto p-8">
				<ErrorMessage
					title="Unable to load transactions"
					description={error.message}
					onRetry={refetch}
				/>
			</div>
		);
	}
	return (
		<div className="max-w-7xl mx-auto py-4 px-8">
			<div className="flex flex-col sm:flex-row gap-4">
				<div className="w-full md:w-1/4 flex-col justify-center items-center">
					<h2 className="text-sm font-normal mb-2">Search:</h2>
					<SearchQuestion onSearch={onSearch} />
					{/* <Category /> */}
				</div>
				<div className="w-full md:w-3/4 flex-col justify-center items-center">
					{loading ? (
						<QuestionsPlaceholder />
					) : (
						<>
							<Questions questions={visibleQuestions} />
							{hasMore && (
								<div className="flex justify-center mt-4">
									<button
										className="bg-blue-500 text-white px-4 py-2 rounded-none cursor-pointer hover:bg-blue-600"
										onClick={handleLoadMore}
									>
										Load More
									</button>
								</div>
							)}
						</>
					)}
				</div>
			</div>
		</div>
	);
};

export default QuestionsPage;

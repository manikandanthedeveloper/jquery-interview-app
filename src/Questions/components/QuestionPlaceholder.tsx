function QuestionPlaceholder() {
	return (
		<div className="flex animate-pulse space-x-4 mb-8 border border-gray-200 p-4 rounded-none">
			<div className="flex-1 space-y-4 py-1">
				<div className="h-4 rounded-none bg-gray-200"></div>
				<div className="space-y-3">
					<div className="grid grid-cols-5 gap-4">
						<div className="col-span-full h-14 rounded-none bg-gray-200"></div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default QuestionPlaceholder;

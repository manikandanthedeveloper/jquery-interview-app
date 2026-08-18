import type { IErrorStateProps } from "./types/index";

function ErrorMessage({
	title = "Something went wrong",
	description = "We couldn't load the requested data. Please try again.",
	onRetry,
}: IErrorStateProps) {
	return (
		<div
			role="alert"
			className="flex flex-col items-center justify-center rounded-none border border-red-200 bg-red-50 px-6 py-12 text-center my-8"
		>
			<div className="mb-4 text-5xl">⚠️</div>
			<h2 className="text-xl font-semibold text-red-700">{title}</h2>
			<p className="mt-2 max-w-md text-sm text-red-600">{description}</p>
			{onRetry && (
				<button
					type="button"
					onClick={onRetry}
					className="mt-6 rounded-none bg-red-600 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-red-700 cursor-pointer"
				>
					Retry
				</button>
			)}
		</div>
	);
}

export default ErrorMessage;

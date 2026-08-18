import { useEffect, useRef } from "react";

const SearchQuestion = ({ onSearch }: { onSearch: (str: string) => void }) => {
	const searchInput = useRef<HTMLInputElement>(null);

	useEffect(() => {
		searchInput.current?.focus();
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === "k" && (event.metaKey || event.ctrlKey)) {
				event.preventDefault();
				searchInput.current?.focus();
			}
		};

		window.addEventListener("keydown", handleKeyDown);

		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, []);

	return (
		<div>
			<input
				type="search"
				placeholder="Search questions..."
				className="border border-gray-300 p-2 rounded-none w-full"
				id="search-input"
				name="search-input"
				onChange={(e) => onSearch(e.target.value)}
				ref={searchInput}
			/>
		</div>
	);
};

export default SearchQuestion;

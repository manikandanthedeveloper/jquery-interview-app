import { useEffect, useState, useCallback, useMemo } from "react";
import { fetchQuestions } from "../services/questionService";
import type IQuestion from "../types";
import { useDebounce } from "./useDebounce";

export const useQuestions = () => {
	const [questions, setQuestion] = useState<IQuestion[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<Error>();
	const [searchInput, setSearchInput] = useState("");
	const [search, setSearch] = useState("");
	const debouncedSearch = useDebounce(search, 300);
	const [category, setCategory] = useState("All");
	const PAGE_SIZE = 5;
	const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
	const handleLoadMore = () => {
		setVisibleCount((prev) => prev + PAGE_SIZE);
	};
	const filteredQuestions = useMemo(() => {
		return questions.filter((question) => {
			const matchesSearch = question.title
				.toLowerCase()
				.includes(debouncedSearch.toLowerCase());

			const matchesCategory =
				category === "All" || question.category === category;

			return matchesSearch && matchesCategory;
		});
	}, [questions, debouncedSearch, category]);
	const hasMore =
		visibleCount < questions.length &&
		filteredQuestions.length > visibleCount;
	const visibleQuestions = filteredQuestions.slice(0, visibleCount);

	useEffect(() => {
		const timeoutId = window.setTimeout(() => {
			setSearch(searchInput);
		}, 300);

		return () => window.clearTimeout(timeoutId);
	}, [searchInput]);

	const onSearch = (value: string) => {
		setSearchInput(value);
		setVisibleCount(PAGE_SIZE);
	};
	const loadQuestions = useCallback(async () => {
		try {
			setLoading(true);
			setError(undefined);
			const data = await fetchQuestions();

			setQuestion(data || []);
		} catch (err) {
			setError(
				err instanceof Error
					? err
					: new Error("Failed to load questions"),
			);
		} finally {
			setLoading(false);
		}
	}, []);

	useEffect(() => {
		void (async () => {
			await loadQuestions();
		})();
	}, [loadQuestions]);

	return {
		visibleQuestions,
		hasMore,
		handleLoadMore,
		loading,
		error,
		onSearch,
		search,
		category,
		setCategory,
		refetch: questions ? loadQuestions : undefined,
	};
};

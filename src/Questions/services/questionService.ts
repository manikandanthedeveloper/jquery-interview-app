import logger from "../../utils/logger";
import type IQuestion from "../types/index";

export const fetchQuestions = async (): Promise<IQuestion[]> => {
	try {
		const response = await fetch("./data/react.json");

		if (!response.ok) {
			throw new Error("Unable to fetch questions");
		}

		const data = (await response.json()) as IQuestion[];

		return data;
	} catch (error) {
		logger.error("Failed to fetch questions", error);
		throw error;
	}
};

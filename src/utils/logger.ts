type LogLevel = "debug" | "info" | "warn" | "error";

const logLevels: Record<LogLevel, number> = {
	debug: 0,
	info: 1,
	warn: 2,
	error: 3,
};

const configuredLevel =
	(import.meta.env.VITE_LOG_LEVEL as LogLevel | undefined) ??
	(import.meta.env.PROD ? "error" : "debug");

const shouldLog = (level: LogLevel) =>
	logLevels[level] >= logLevels[configuredLevel];

const buildLogger = (level: LogLevel) => {
	return (...args: unknown[]) => {
		if (!shouldLog(level)) {
			return;
		}

		const prefix = `[${level.toUpperCase()}]`;
		const method =
			level === "error"
				? console.error
				: level === "warn"
					? console.warn
					: level === "info"
						? console.info
						: console.debug;

		method(prefix, ...args);
	};
};

const logger = {
	debug: buildLogger("debug"),
	info: buildLogger("info"),
	warn: buildLogger("warn"),
	error: buildLogger("error"),
};

export default logger;

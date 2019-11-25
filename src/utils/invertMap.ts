import { EMPTY_OBJECT } from "@vangware/micro";

/**
 * Takes a map of key-values and returns values with key as their values.
 * @param source Source map.
 * @returns Inverted map.
 */
export const invertMap = (source: {
	[key: string]: string[];
}): { [key: string]: string } =>
	Object.keys(source).reduce(
		(map, item) => ({
			...map,
			...source[item].reduce(
				(base, baseItem) => ({ ...base, [baseItem]: item }),
				EMPTY_OBJECT
			)
		}),
		EMPTY_OBJECT
	);

export default invertMap;

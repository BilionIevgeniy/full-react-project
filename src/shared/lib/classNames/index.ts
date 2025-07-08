export function classNames(
	cls: string,
	mods: Record<string, boolean | string> = {},
	additional: string[] = []
): string {
	return [
		cls,
		...Object.entries(mods)
			.filter(([_, value]) => Boolean(value))
			.map(([className]) => className),
		...additional.filter(Boolean),
	].join(' ');
}

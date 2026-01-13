export function classNames(
    mainCls: string,
    mods: Record<string, boolean | string> = {},
    additional: string[] = [],
): string {
    return [
        mainCls,
        ...Object.entries(mods)
            .filter(([_, value]) => Boolean(value))
            .map(([className]) => className),
        ...additional.filter(Boolean),
    ].join(' ');
}

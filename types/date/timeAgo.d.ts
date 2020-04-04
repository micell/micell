declare type Locale = Array<[string, string]>;
export interface TimeAgo {
    getLocale(): string;
    setLocale(name: string): void;
    addLocale(name: string, locale: Locale): void;
    format(date: number | string | Date, locale?: string, nowDate?: Date): string;
}
declare const timeAgo: TimeAgo;
export default timeAgo;

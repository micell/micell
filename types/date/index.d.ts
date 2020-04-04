import diff from './diff';
declare const _default: {
    diff: typeof diff;
    format: (date: number | Date, format?: string, isUTC?: boolean) => string;
    timeAgo: import("./timeAgo").TimeAgo;
};
export default _default;

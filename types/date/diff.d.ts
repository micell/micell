interface RoundFunc {
    (value: number): number;
}
export default function diff(date1: number | string | Date, date2: number | string | Date, unit?: string, roundFunc?: RoundFunc): number;
export {};

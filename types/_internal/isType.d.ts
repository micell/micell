export interface ToStringFunc {
    (o: any): boolean;
}
declare const isType: (type: string) => ToStringFunc;
export default isType;

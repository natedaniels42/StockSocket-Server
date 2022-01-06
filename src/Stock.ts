export interface Data {
    timestamp: string,
    open: number,
    high: number,
    low: number,
    close: number
}

export class Stock {
    constructor(
        public symbol: string, 
        public data: Data[]) {  }
}
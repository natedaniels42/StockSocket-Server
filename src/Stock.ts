export interface Data {
    timestamp: number,
    amount: number
}

export class Stock {
    constructor(
        public symbol: string, 
        public data: Data[]) {  }
}
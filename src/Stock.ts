export interface Data {
    timestamp: number,
    amount: number
}

export class Stock {
    constructor(
        public name: string,
        public symbol: string,
        public image: string, 
        public data: Data[]) {  }
}
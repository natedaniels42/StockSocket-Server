export interface CandleStickData {
    timestamp: number,
    high: number,
    low: number,
    open: number,
    close: number
}

export class CandleStickStock {
    constructor (
        public name: string,
        public symbol: string,
        public image: string,
        public data: CandleStickData[]
    ) {  }
}
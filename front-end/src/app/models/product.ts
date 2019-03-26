
export class Product {

    _source: any;
    supermarketImg: string;
    evaluated: boolean;
    rank: number;

    constructor() {
        this.evaluated = false;
        this.rank = -1;
    }
}

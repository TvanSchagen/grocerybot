import { Product } from './product';

export class Evaluation {

    // product: Product;
    rank: number;
    relevant: boolean;

    constructor(rank: number, relevant: boolean) {
        this.rank = rank;
        this.relevant = relevant;
    }
}

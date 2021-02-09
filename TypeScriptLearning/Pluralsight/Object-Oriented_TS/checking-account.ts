export class CheckingAccoujnt {
    private _balance = 0;
    
    constructor(public title: string){}

    get balance() {
        return this._balance;
    }

    set balance(value: number) {
        this._balance = value;
    }

    deposit(amount: number) {
        this._balance += amount;
    }

    withdrawal(amount: number) {
        this._balance += amount;
    }
}
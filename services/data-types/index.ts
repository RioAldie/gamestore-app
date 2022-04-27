export interface CategoryTypes {
    _id: string;
    name : string;
    __v: number
}

export interface GameItemTypes {
    _id : string;
    status: string;
    name: string;
    thumbnail : string;
    category: CategoryTypes;
}
export interface BanksType{
    _id: string;
    name: string;
    bankName: string;
    noRekening: string;
}
export interface PaymentTypes {
    _id: string;
    type: string;
    status: string;
    banks: []
}
export interface Nominalstypes{
    _id: string;
    coinQuantity: number;
    coinName: string;
    price: number
}
export interface LoginTypes{
    email: string;
    password: string;
}
export interface EnvironmentInterface {
    production: boolean;
    apiUrl: string;
}

export interface CountAll {
    barbersCount: number
    clientsCount: number
    expensesCount: number
    officesCount: number
    paymentsCount: number
    productsCount: number
    servicesCount: number
}

export interface StockModel {
    name: string
    stock: number
    _id: string
}
export enum PaymentMethod {
    CASH = 'CASH',
    CARD = 'CARD'
}
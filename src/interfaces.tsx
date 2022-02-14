export interface ICompany {
    _id: string,
    name: string,
    description?: string,
}

export interface IUnit {
    _id: string,
    name: string,
    description?: string,
    companyId: string,
}
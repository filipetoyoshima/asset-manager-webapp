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

export interface IAsset {
    name: string;
    description?: string;
    model: string;
    status: string;
    healthLevel: number;
}

export interface IUnitAssets {
    unit: IUnit;
    assets: Array<IAsset>;
}
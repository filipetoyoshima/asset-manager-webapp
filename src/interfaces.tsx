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
    _id: string,
    name: string;
    description?: string;
    model: string;
    status: string;
    healthLevel: number;
    unitId: string;
}

export interface IUnitAssets {
    unit: IUnit;
    assets: Array<IAsset>;
}
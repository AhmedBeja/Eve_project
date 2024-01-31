export interface Energy {
    id: string;
    name: string;
    description: string;
    lcoe: string;
}

export interface Energy_type {
    id: string;
    type: string;
    pourcentage: number;
}

export interface Energy_mean {
    id: string;
    type: string;
    family: string;
    pourcentage: number;
}
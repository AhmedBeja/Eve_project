export interface Energy {
    id: string;
    name: string;
    description: string;
    lcoe: string;
    group: string;
    electricite: number;
    chaleur: number;
    combustible: number;
}

export interface Energy_type {
    id: string;
    type: string;
    pourcentage: number;
    Energie_totale: number;
    group: string;
}

export interface Energy_mean {
    id: string;
    type: string;
    family: string;
    pourcentage: number;
    group: string;
}
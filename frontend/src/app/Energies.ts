export interface Energy {
    id: string;
    name: string;
    description: string;
    lcoe: string;
    group: string;
    electricite: number;
    chaleur: number;
    combustible: number;
    description_electricite: string;
    type_technologie: string;
    puissance_unitaire: string;
    puissance_vulgarisee: string;
    equivalent_petrole:string;
    acteurs_principaux:string;
    duree_vie:string;
    points_negatifs:string;
    idee_recue:string;
    tendance:string;

}

export interface Energy_type {
    id: string;
    type: string;
    pourcentage: number;
    Energie_totale: number;
    group: string;
}

export interface Energy_vector {
    id: string;
    type: string;
    pourcentage: number;
    Energie_totale: number;
}

export interface Energy_mean {
    id: string;
    type: string;
    family: string;
    pourcentage: number;
    group: string;
}
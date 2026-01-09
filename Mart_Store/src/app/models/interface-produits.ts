export interface produits{
    titre : string;
    description:string;
    images:string[];
    id : number;
    prix : number;
    etat : string;
    date_creation : Date;
    disponibilite : Availability;
    ville: string;

}
export interface Availability{
    disponible:boolean;
    type : string;
}
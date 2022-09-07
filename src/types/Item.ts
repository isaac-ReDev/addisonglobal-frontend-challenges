export interface Item {
    id:string | number;
    name:string;
    description:string;
    heroImageUrl:string;
    joinNowButtonText:string;
    termsAndConditionsButtonText:string;
    onlyNewCustomers:boolean;
    sequence: number;
}
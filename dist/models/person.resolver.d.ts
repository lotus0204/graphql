export declare class PersonResolver {
    getAllPerson(): Promise<({
        id: string;
        name: string;
        number: string;
        email: string;
    } | {
        id: string;
        name: string;
        number: string;
        email?: undefined;
    })[]>;
}

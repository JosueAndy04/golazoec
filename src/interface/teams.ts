export interface Teams {
    get:        string;
    parameters: Parameters;
    errors:     any[];
    results:    number;
    paging:     Paging;
    response:   Response[];
}

export interface Paging {
    current: number;
    total:   number;
}

export interface Parameters {
    league: string;
    season: string;
}

export interface Response {
    team:  Team;
    venue: Venue;
}

export interface Team {
    id:       number;
    name:     string;
    code:     null | string;
    country:  Country;
    founded:  number | null;
    national: boolean;
    logo:     string;
}

export enum Country {
    Ecuador = "Ecuador",
}

export interface Venue {
    id:       number | null;
    name:     null | string;
    address:  null | string;
    city:     null | string;
    capacity: number | null;
    surface:  Surface | null;
    image:    null | string;
}

export enum Surface {
    ArtificialTurf = "artificial turf",
    Grass = "grass",
}

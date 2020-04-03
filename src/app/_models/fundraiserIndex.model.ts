export interface FundraiserIndex {
    data: Data;
    loading: boolean;
    networkStatus: number;
    stale: boolean;
}

interface Data {
    fundraisersConnection: FundraisersConnection;
}

interface FundraisersConnection {
    aggregate: Aggregate;
    edges: Edge[];
    __typename: string;
}

interface Aggregate {
    count: number;
    __typename: string;
}

interface Edge {
    node: InternalNode;
    __typename: string;
}

interface InternalNode {
    id: string;
    name: string;
    __typename: string;
}
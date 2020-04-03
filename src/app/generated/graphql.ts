export type Maybe<T> = T | null;

export interface TransactionWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<TransactionWhereInput[]>;

  id?: Maybe<string>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<string>;
  /** All values that are contained in given list. */
  id_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  id_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<string>;
  /** All values greater than the given value. */
  id_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<string>;
  /** All values containing the given string. */
  id_contains?: Maybe<string>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<string>;

  createdAt?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<DateTime>;

  updatedAt?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<DateTime>;

  amount?: Maybe<number>;
  /** All values that are not equal to given value. */
  amount_not?: Maybe<number>;
  /** All values that are contained in given list. */
  amount_in?: Maybe<number[]>;
  /** All values that are not contained in given list. */
  amount_not_in?: Maybe<number[]>;
  /** All values less than the given value. */
  amount_lt?: Maybe<number>;
  /** All values less than or equal the given value. */
  amount_lte?: Maybe<number>;
  /** All values greater than the given value. */
  amount_gt?: Maybe<number>;
  /** All values greater than or equal the given value. */
  amount_gte?: Maybe<number>;

  user?: Maybe<string>;
  /** All values that are not equal to given value. */
  user_not?: Maybe<string>;
  /** All values that are contained in given list. */
  user_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  user_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  user_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  user_lte?: Maybe<string>;
  /** All values greater than the given value. */
  user_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  user_gte?: Maybe<string>;
  /** All values containing the given string. */
  user_contains?: Maybe<string>;
  /** All values not containing the given string. */
  user_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  user_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  user_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  user_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  user_not_ends_with?: Maybe<string>;

  owner?: Maybe<FundraiserWhereInput>;
}

export interface FundraiserWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<FundraiserWhereInput[]>;

  id?: Maybe<string>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<string>;
  /** All values that are contained in given list. */
  id_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  id_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<string>;
  /** All values greater than the given value. */
  id_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<string>;
  /** All values containing the given string. */
  id_contains?: Maybe<string>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<string>;

  createdAt?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<DateTime>;

  updatedAt?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<DateTime>;

  name?: Maybe<string>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<string>;
  /** All values that are contained in given list. */
  name_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  name_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  name_lte?: Maybe<string>;
  /** All values greater than the given value. */
  name_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  name_gte?: Maybe<string>;
  /** All values containing the given string. */
  name_contains?: Maybe<string>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  name_not_ends_with?: Maybe<string>;

  transactions_some?: Maybe<TransactionWhereInput>;
}

export interface TransactionWhereUniqueInput {
  id?: Maybe<string>;
}

export interface FundraiserWhereUniqueInput {
  id?: Maybe<string>;
}

export interface TransactionCreateInput {
  id?: Maybe<string>;

  amount: number;

  user: string;

  owner: FundraiserCreateOneWithoutTransactionsInput;
}

export interface FundraiserCreateOneWithoutTransactionsInput {
  create?: Maybe<FundraiserCreateWithoutTransactionsInput>;

  connect?: Maybe<FundraiserWhereUniqueInput>;
}

export interface FundraiserCreateWithoutTransactionsInput {
  id?: Maybe<string>;

  name: string;
}

export interface FundraiserCreateInput {
  id?: Maybe<string>;

  name: string;

  transactions?: Maybe<TransactionCreateManyWithoutOwnerInput>;
}

export interface TransactionCreateManyWithoutOwnerInput {
  create?: Maybe<TransactionCreateWithoutOwnerInput[]>;

  connect?: Maybe<TransactionWhereUniqueInput[]>;
}

export interface TransactionCreateWithoutOwnerInput {
  id?: Maybe<string>;

  amount: number;

  user: string;
}

export interface TransactionUpdateInput {
  amount?: Maybe<number>;

  user?: Maybe<string>;

  owner?: Maybe<FundraiserUpdateOneRequiredWithoutTransactionsInput>;
}

export interface FundraiserUpdateOneRequiredWithoutTransactionsInput {
  create?: Maybe<FundraiserCreateWithoutTransactionsInput>;

  connect?: Maybe<FundraiserWhereUniqueInput>;

  update?: Maybe<FundraiserUpdateWithoutTransactionsDataInput>;

  upsert?: Maybe<FundraiserUpsertWithoutTransactionsInput>;
}

export interface FundraiserUpdateWithoutTransactionsDataInput {
  name?: Maybe<string>;
}

export interface FundraiserUpsertWithoutTransactionsInput {
  update: FundraiserUpdateWithoutTransactionsDataInput;

  create: FundraiserCreateWithoutTransactionsInput;
}

export interface FundraiserUpdateInput {
  name?: Maybe<string>;

  transactions?: Maybe<TransactionUpdateManyWithoutOwnerInput>;
}

export interface TransactionUpdateManyWithoutOwnerInput {
  create?: Maybe<TransactionCreateWithoutOwnerInput[]>;

  connect?: Maybe<TransactionWhereUniqueInput[]>;

  set?: Maybe<TransactionWhereUniqueInput[]>;

  disconnect?: Maybe<TransactionWhereUniqueInput[]>;

  delete?: Maybe<TransactionWhereUniqueInput[]>;

  update?: Maybe<TransactionUpdateWithWhereUniqueWithoutOwnerInput[]>;

  updateMany?: Maybe<TransactionUpdateManyWithWhereNestedInput[]>;

  deleteMany?: Maybe<TransactionScalarWhereInput[]>;

  upsert?: Maybe<TransactionUpsertWithWhereUniqueWithoutOwnerInput[]>;
}

export interface TransactionUpdateWithWhereUniqueWithoutOwnerInput {
  where: TransactionWhereUniqueInput;

  data: TransactionUpdateWithoutOwnerDataInput;
}

export interface TransactionUpdateWithoutOwnerDataInput {
  amount?: Maybe<number>;

  user?: Maybe<string>;
}

export interface TransactionUpdateManyWithWhereNestedInput {
  where: TransactionScalarWhereInput;

  data: TransactionUpdateManyDataInput;
}

export interface TransactionScalarWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<TransactionScalarWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<TransactionScalarWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<TransactionScalarWhereInput[]>;

  id?: Maybe<string>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<string>;
  /** All values that are contained in given list. */
  id_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  id_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<string>;
  /** All values greater than the given value. */
  id_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<string>;
  /** All values containing the given string. */
  id_contains?: Maybe<string>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<string>;

  createdAt?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<DateTime>;

  updatedAt?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<DateTime>;

  amount?: Maybe<number>;
  /** All values that are not equal to given value. */
  amount_not?: Maybe<number>;
  /** All values that are contained in given list. */
  amount_in?: Maybe<number[]>;
  /** All values that are not contained in given list. */
  amount_not_in?: Maybe<number[]>;
  /** All values less than the given value. */
  amount_lt?: Maybe<number>;
  /** All values less than or equal the given value. */
  amount_lte?: Maybe<number>;
  /** All values greater than the given value. */
  amount_gt?: Maybe<number>;
  /** All values greater than or equal the given value. */
  amount_gte?: Maybe<number>;

  user?: Maybe<string>;
  /** All values that are not equal to given value. */
  user_not?: Maybe<string>;
  /** All values that are contained in given list. */
  user_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  user_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  user_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  user_lte?: Maybe<string>;
  /** All values greater than the given value. */
  user_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  user_gte?: Maybe<string>;
  /** All values containing the given string. */
  user_contains?: Maybe<string>;
  /** All values not containing the given string. */
  user_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  user_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  user_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  user_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  user_not_ends_with?: Maybe<string>;
}

export interface TransactionUpdateManyDataInput {
  amount?: Maybe<number>;

  user?: Maybe<string>;
}

export interface TransactionUpsertWithWhereUniqueWithoutOwnerInput {
  where: TransactionWhereUniqueInput;

  update: TransactionUpdateWithoutOwnerDataInput;

  create: TransactionCreateWithoutOwnerInput;
}

export interface TransactionUpdateManyMutationInput {
  amount?: Maybe<number>;

  user?: Maybe<string>;
}

export interface FundraiserUpdateManyMutationInput {
  name?: Maybe<string>;
}

export interface TransactionSubscriptionWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<TransactionSubscriptionWhereInput[]>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<MutationType[]>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<string>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<string[]>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<string[]>;

  node?: Maybe<TransactionWhereInput>;
}

export interface FundraiserSubscriptionWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<FundraiserSubscriptionWhereInput[]>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<MutationType[]>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<string>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<string[]>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<string[]>;

  node?: Maybe<FundraiserWhereInput>;
}

export enum TransactionOrderByInput {
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  AmountAsc = "amount_ASC",
  AmountDesc = "amount_DESC",
  UserAsc = "user_ASC",
  UserDesc = "user_DESC"
}

export enum FundraiserOrderByInput {
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  NameAsc = "name_ASC",
  NameDesc = "name_DESC"
}

export enum MutationType {
  Created = "CREATED",
  Updated = "UPDATED",
  Deleted = "DELETED"
}

export type DateTime = any;

/** The `Long` scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
export type Long = any;

// ====================================================
// Documents
// ====================================================

export namespace CreateFundraiser {
  export type Variables = {
    name: string;
  };

  export type Mutation = {
    __typename?: "Mutation";

    createFundraiser: CreateFundraiser;
  };

  export type CreateFundraiser = {
    __typename?: "Fundraiser";

    id: string;
  };
}

export namespace InsertManyTransactions {
  export type Variables = {
    id: string;
    transactions: TransactionCreateWithoutOwnerInput[];
  };

  export type Mutation = {
    __typename?: "Mutation";

    updateFundraiser: Maybe<UpdateFundraiser>;
  };

  export type UpdateFundraiser = {
    __typename?: "Fundraiser";

    transactions: Maybe<Transactions[]>;
  };

  export type Transactions = {
    __typename?: "Transaction";

    id: string;
  };
}

export namespace CreateTransaction {
  export type Variables = {
    amount: number;
    user: string;
    owner: string;
  };

  export type Mutation = {
    __typename?: "Mutation";

    createTransaction: CreateTransaction;
  };

  export type CreateTransaction = {
    __typename?: "Transaction";

    id: string;
  };
}

export namespace DeleteFundraiser {
  export type Variables = {
    id: string;
  };

  export type Mutation = {
    __typename?: "Mutation";

    deleteFundraiser: Maybe<DeleteFundraiser>;
  };

  export type DeleteFundraiser = {
    __typename?: "Fundraiser";

    id: string;
  };
}

export namespace FindByName {
  export type Variables = {
    name: string;
  };

  export type Query = {
    __typename?: "Query";

    fundraisers: (Maybe<Fundraisers>)[];
  };

  export type Fundraisers = {
    __typename?: "Fundraiser";

    id: string;
  };
}

export namespace FundraiserByOwner {
  export type Variables = {
    id: string;
  };

  export type Query = {
    __typename?: "Query";

    fundraiser: Maybe<Fundraiser>;
  };

  export type Fundraiser = {
    __typename?: "Fundraiser";

    id: string;

    name: string;

    transactions: Maybe<Transactions[]>;
  };

  export type Transactions = {
    __typename?: "Transaction";

    user: string;

    amount: number;
  };
}

export namespace GetFundraisersIndex {
  export type Variables = {};

  export type Query = {
    __typename?: "Query";

    fundraisersConnection: FundraisersConnection;
  };

  export type FundraisersConnection = {
    __typename?: "FundraiserConnection";

    aggregate: Aggregate;

    edges: (Maybe<Edges>)[];
  };

  export type Aggregate = {
    __typename?: "AggregateFundraiser";

    count: number;
  };

  export type Edges = {
    __typename?: "FundraiserEdge";

    node: Node;
  };

  export type Node = {
    __typename?: "Fundraiser";

    id: string;

    name: string;
  };
}

export namespace GetTransactionCountByOwnerId {
  export type Variables = {
    id: string;
  };

  export type Query = {
    __typename?: "Query";

    transactionsConnection: TransactionsConnection;
  };

  export type TransactionsConnection = {
    __typename?: "TransactionConnection";

    aggregate: Aggregate;
  };

  export type Aggregate = {
    __typename?: "AggregateTransaction";

    count: number;
  };
}

export namespace GetEverythingUsefull {
  export type Variables = {};

  export type Query = {
    __typename?: "Query";

    fundraisers: (Maybe<Fundraisers>)[];
  };

  export type Fundraisers = {
    __typename?: "Fundraiser";

    id: string;

    name: string;

    transactions: Maybe<Transactions[]>;
  };

  export type Transactions = {
    __typename?: "Transaction";

    id: string;

    createdAt: DateTime;

    updatedAt: DateTime;

    amount: number;

    user: string;

    owner: Owner;
  };

  export type Owner = {
    __typename?: "Fundraiser";

    id: string;
  };
}

export namespace GetFundraiser {
  export type Variables = {
    id: string;
  };

  export type Query = {
    __typename?: "Query";

    fundraiser: Maybe<Fundraiser>;
  };

  export type Fundraiser = {
    __typename?: "Fundraiser";

    id: string;

    name: string;

    transactions: Maybe<Transactions[]>;
  };

  export type Transactions = {
    __typename?: "Transaction";

    user: string;

    amount: number;

    updatedAt: DateTime;
  };
}

export namespace TransactionChanges {
  export type Variables = {};

  export type Subscription = {
    __typename?: "Subscription";

    transaction: Maybe<Transaction>;
  };

  export type Transaction = {
    __typename?: "TransactionSubscriptionPayload";

    node: Maybe<Node>;
  };

  export type Node = {
    __typename?: "Transaction";

    owner: Owner;
  };

  export type Owner = {
    __typename?: "Fundraiser";

    id: string;
  };
}

export namespace WipeTransactions {
  export type Variables = {
    id: string;
  };

  export type Mutation = {
    __typename?: "Mutation";

    updateFundraiser: Maybe<UpdateFundraiser>;
  };

  export type UpdateFundraiser = {
    __typename?: "Fundraiser";

    id: string;
  };
}

// ====================================================
// START: Apollo Angular template
// ====================================================

import { Injectable } from "@angular/core";
import * as Apollo from "apollo-angular";

import gql from "graphql-tag";

// ====================================================
// Apollo Services
// ====================================================

@Injectable({
  providedIn: "root"
})
export class CreateFundraiserGQL extends Apollo.Mutation<
  CreateFundraiser.Mutation,
  CreateFundraiser.Variables
> {
  document: any = gql`
    mutation createFundraiser($name: String!) {
      createFundraiser(data: { name: $name }) {
        id
      }
    }
  `;
}
@Injectable({
  providedIn: "root"
})
export class InsertManyTransactionsGQL extends Apollo.Mutation<
  InsertManyTransactions.Mutation,
  InsertManyTransactions.Variables
> {
  document: any = gql`
    mutation insertManyTransactions(
      $id: ID!
      $transactions: [TransactionCreateWithoutOwnerInput!]!
    ) {
      updateFundraiser(
        data: { transactions: { create: $transactions } }
        where: { id: $id }
      ) {
        transactions {
          id
        }
      }
    }
  `;
}
@Injectable({
  providedIn: "root"
})
export class CreateTransactionGQL extends Apollo.Mutation<
  CreateTransaction.Mutation,
  CreateTransaction.Variables
> {
  document: any = gql`
    mutation createTransaction($amount: Float!, $user: String!, $owner: ID!) {
      createTransaction(
        data: {
          amount: $amount
          user: $user
          owner: { connect: { id: $owner } }
        }
      ) {
        id
      }
    }
  `;
}
@Injectable({
  providedIn: "root"
})
export class DeleteFundraiserGQL extends Apollo.Mutation<
  DeleteFundraiser.Mutation,
  DeleteFundraiser.Variables
> {
  document: any = gql`
    mutation deleteFundraiser($id: ID!) {
      deleteFundraiser(where: { id: $id }) {
        id
      }
    }
  `;
}
@Injectable({
  providedIn: "root"
})
export class FindByNameGQL extends Apollo.Query<
  FindByName.Query,
  FindByName.Variables
> {
  document: any = gql`
    query findByName($name: String!) {
      fundraisers(where: { name: $name }) {
        id
      }
    }
  `;
}
@Injectable({
  providedIn: "root"
})
export class FundraiserByOwnerGQL extends Apollo.Query<
  FundraiserByOwner.Query,
  FundraiserByOwner.Variables
> {
  document: any = gql`
    query fundraiserByOwner($id: ID!) {
      fundraiser(where: { id: $id }) {
        id
        name
        transactions {
          user
          amount
        }
      }
    }
  `;
}
@Injectable({
  providedIn: "root"
})
export class GetFundraisersIndexGQL extends Apollo.Query<
  GetFundraisersIndex.Query,
  GetFundraisersIndex.Variables
> {
  document: any = gql`
    query getFundraisersIndex {
      fundraisersConnection {
        aggregate {
          count
        }
        edges {
          node {
            id
            name
          }
        }
      }
    }
  `;
}
@Injectable({
  providedIn: "root"
})
export class GetTransactionCountByOwnerIdGQL extends Apollo.Query<
  GetTransactionCountByOwnerId.Query,
  GetTransactionCountByOwnerId.Variables
> {
  document: any = gql`
    query getTransactionCountByOwnerID($id: ID!) {
      transactionsConnection(where: { owner: { id: $id } }) {
        aggregate {
          count
        }
      }
    }
  `;
}
@Injectable({
  providedIn: "root"
})
export class GetEverythingUsefullGQL extends Apollo.Query<
  GetEverythingUsefull.Query,
  GetEverythingUsefull.Variables
> {
  document: any = gql`
    query getEverythingUsefull {
      fundraisers {
        id
        name
        transactions {
          id
          createdAt
          updatedAt
          amount
          user
          owner {
            id
          }
        }
      }
    }
  `;
}
@Injectable({
  providedIn: "root"
})
export class GetFundraiserGQL extends Apollo.Query<
  GetFundraiser.Query,
  GetFundraiser.Variables
> {
  document: any = gql`
    query getFundraiser($id: ID!) {
      fundraiser(where: { id: $id }) {
        id
        name
        transactions {
          user
          amount
          updatedAt
        }
      }
    }
  `;
}
@Injectable({
  providedIn: "root"
})
export class TransactionChangesGQL extends Apollo.Subscription<
  TransactionChanges.Subscription,
  TransactionChanges.Variables
> {
  document: any = gql`
    subscription transactionChanges {
      transaction {
        node {
          owner {
            id
          }
        }
      }
    }
  `;
}
@Injectable({
  providedIn: "root"
})
export class WipeTransactionsGQL extends Apollo.Mutation<
  WipeTransactions.Mutation,
  WipeTransactions.Variables
> {
  document: any = gql`
    mutation wipeTransactions($id: ID!) {
      updateFundraiser(
        data: { transactions: { deleteMany: { amount_gt: -1 } } }
        where: { id: $id }
      ) {
        id
      }
    }
  `;
}

// ====================================================
// END: Apollo Angular template
// ====================================================

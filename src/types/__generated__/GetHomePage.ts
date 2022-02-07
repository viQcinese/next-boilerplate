/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetHomePage
// ====================================================

export interface GetHomePage_pageHome {
  __typename: "PageHome";
  title: string;
  description: string;
}

export interface GetHomePage_subscriptions {
  __typename: "Subscription";
  name: string;
  description: string;
  value: number;
  annualSaving: number | null;
  features: string[];
}

export interface GetHomePage {
  pageHome: GetHomePage_pageHome;
  subscriptions: GetHomePage_subscriptions[];
}

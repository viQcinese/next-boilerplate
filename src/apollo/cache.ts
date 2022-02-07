import { InMemoryCache, InMemoryCacheConfig } from "@apollo/client";
import { pageHome, subscriptions } from "./mocks";

export const cacheConfig: InMemoryCacheConfig = {
  typePolicies: {
    Query: {
      fields: {
        pageHome: {
          keyArgs: false,
          read: () => pageHome,
        },
        subscriptions: {
          keyArgs: false,
          read: () => subscriptions,
        },
      },
    },
  },
};

export const cache = new InMemoryCache(cacheConfig);

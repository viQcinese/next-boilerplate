import { InMemoryCache, InMemoryCacheConfig } from "@apollo/client";

export const cacheConfig: InMemoryCacheConfig = {
  typePolicies: {
    Query: {
      fields: {
        pageHome: {
          keyArgs: false,
          read() {
            return {
              title: "My Title",
            };
          },
        },
      },
    },
  },
};

export const cache = new InMemoryCache(cacheConfig);

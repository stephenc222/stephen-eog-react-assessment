import React from 'react';
import { SubscriptionClient } from 'subscriptions-transport-ws';
import {
  cacheExchange,
  createClient,
  debugExchange,
  fetchExchange,
  Provider,
  subscriptionExchange,
} from 'urql';
import { Messages } from './Messages';

const subscriptionClient = new SubscriptionClient(
  'ws://react.eogresources.com/graphql',
  {}
);

const client = createClient({
  url: 'https://react.eogresources.com/graphql',
  exchanges: [
    cacheExchange,
    fetchExchange,
    subscriptionExchange({
      forwardSubscription: operation => subscriptionClient.request(operation),
    }),
  ],
});

export default () => (
  <Provider value={client}>
    <>
      <Messages />
    </>
  </Provider>
);

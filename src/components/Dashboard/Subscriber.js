import React from 'react';
import { useDispatch } from "react-redux";
import gql from 'graphql-tag';
import { SubscriptionClient } from 'subscriptions-transport-ws';
import { useSubscription } from 'urql';
import { METRIC_DATA_RECEIVED } from '../../store/actions'
import {
  cacheExchange,
  createClient,
  fetchExchange,
  Provider,
  subscriptionExchange,
} from 'urql';

const NewMessageSubQuery = gql`
	subscription newMeasurement {
		newMeasurement{
			metric
			at
			value
			unit
		}
	}
`;
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

const Subscriber = () => {
  const dispatch = useDispatch()
  const handleSubscription = (
    messages = [],
    response
  ) => {
    dispatch({ type: METRIC_DATA_RECEIVED, payload: response.newMeasurement })
    return []
  };

  const [res] = useSubscription(
    { query: NewMessageSubQuery },
    handleSubscription
  );

  if (res.error !== undefined) {
    return <div>{res.error.message}</div>;
  }

  if (res.data === undefined) {
    return null;
  }
  return (
    <>
    </>
  )
};

export default () =>
  <Provider value={client}>
    <Subscriber />
  </Provider>
import React, { useEffect, useState } from 'react';
import Paper from "@material-ui/core/Paper";
import gql from 'graphql-tag';
import { useDispatch, useSelector } from "react-redux";
import { useSubscription } from 'urql';
import { METRIC_DATA_RECEIVED } from '../../store/actions'

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

export const Messages = (props) => {
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
  );
};

Messages.displayName = 'Messages';

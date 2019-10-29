import React, { useEffect, useState } from 'react';
import gql from 'graphql-tag';
import { useDispatch, useSelector } from "react-redux";
import { useSubscription } from 'urql';

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

export const Messages = () => {
  // TODO: temporary UI state to render update
  const [tempUIState, updateTempUIState] = useState({})
  const handleSubscription = (
    messages = [],
    response
  ) => {
    updateTempUIState(response.newMeasurement)
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
    return <p>No new messages</p>;
  }


  return (
    <ul>
      {JSON.stringify(tempUIState, null, 0)}
    </ul>
  );
};

Messages.displayName = 'Messages';

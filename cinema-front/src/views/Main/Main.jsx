import * as React from 'react';
import { useSelector } from 'react-redux';

export const Main = () => {
  const user = useSelector(state => state.user.currentUser)
  return (
    <div>
      {user.username}
    </div>
  );
};

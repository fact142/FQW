import { useSelector } from 'react-redux';

const UseUser = () => {
  return useSelector((state) => state.user.currentUser);
}

export default UseUser

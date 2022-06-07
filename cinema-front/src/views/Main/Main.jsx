import * as React from 'react';
import { useSelector } from 'react-redux';
import MainLayout from '../../components/MainLayout/index';
import FilmList from '../../components/MoviePoster/FilmList';

export const Main = () => {
  const user = useSelector(state => state.user.currentUser)
  return (
    <MainLayout>
      <FilmList />
    </MainLayout>
  );
};

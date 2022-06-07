const SET_AUDITORIUM = 'SET_AUDITORIUM';
const SET_AUDITORIUM_NUMBER = 'SET_AUDITORIUM_NUMBER';
const SET_FILM = 'SET_FILM'

const defaultState = {
  auditorium: '',
  film: '',
  auditoriumNumber: '',
};

export default function sessionReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_AUDITORIUM:
      return {
        ...state,
        auditorium: action.payload,
      };
    case SET_AUDITORIUM_NUMBER:
      return {
        ...state,
        auditoriumNumber: action.payload,
      }
    case SET_FILM:
      return {
        ...state,
        film: action.payload,
      }
    default:
      return state;
  }
}
export const setAuditorium = (auditoriumID) => ({ type: SET_AUDITORIUM, payload: auditoriumID });
export const setAuditoriumNumber = (auditoriumNumber) => ({ type: SET_AUDITORIUM_NUMBER, payload: auditoriumNumber});
export const setFilm = (filmId) => ({type: SET_FILM, payload: filmId});


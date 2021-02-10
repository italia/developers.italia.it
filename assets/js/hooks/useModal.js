import { useReducer } from 'react';

const initialState = {
  isModalOpen: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'OPEN_MODAL':
      return { ...state, isModalOpen: true };
    case 'CLOSE_MODAL':
      return { ...state, isModalOpen: false };
    default:
      return state;
  }
};

export const useModal = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const closeModal = () => dispatch({ type: 'CLOSE_MODAL' });
  const openModal = () => dispatch({ type: 'OPEN_MODAL' });

  return [state.isModalOpen, closeModal, openModal];
};

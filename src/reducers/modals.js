import { OPEN_MODAL, CLOSE_MODAL  } from '../actions';

const initialState =  {
  gif: null
};

export default function gifs(state = initialState, action) {
  const {type, payload} = action;
  switch (type) {
    case OPEN_MODAL:
      return {
        ...state,
        modalIsOpen: true,
        selectedGif: payload.selectedGif
      };
    case CLOSE_MODAL:
        return {
          ...state,
          modalIsOpen: false,
          selectedGif: null
        };
    default:
      return state;
  }
}
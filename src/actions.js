import { apiCall } from './api/api'
import env from "react-dotenv";
import {
  CHANGE_SEARCHFIELD,
  REQUEST_CHARACTERS_PENDING,
  REQUEST_CHARACTERS_SUCCESS,
  REQUEST_CHARACTERS_FAILED
} from './constants'

const api_url = env.API_URL
console.log(api_url);

export const setSearchField = (text) => ({ type: CHANGE_SEARCHFIELD, payload: text })

export const requestCharacters = () => (dispatch) => {
  dispatch({ type: REQUEST_CHARACTERS_PENDING })
  apiCall(api_url)
    .then((data) =>
      dispatch({ type: REQUEST_CHARACTERS_SUCCESS, payload: data.data.results})
    )
    .catch((error) =>
      dispatch({ type: REQUEST_CHARACTERS_FAILED, payload: error })
    );
}
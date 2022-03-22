import axios from 'axios';
import { GET_ALL, LOADING, ERROR } from '../types/usersTypes';

export const getAll = () => async (dispatch) => {
    dispatch({
        type: LOADING
    });
    try {
        const answer = await axios.get('http://jsonplaceholder.typicode.com/posts');
        dispatch(
            { 
                type: GET_ALL, 
                payload: answer.data,
            }
        )
    } 
    catch (error) {
        console.log('Error: ' + error.message);
        dispatch({
            type: ERROR,
            payload: 'Somethig was wrong, please try again later',
        })
    }
};

export const getByUser = () => async (dispatch) => {
    const answer = await axios.get('http://jsonplaceholder.typicode.com/posts?userId=1');
    dispatch({
        type: GET_ALL,
        payload: answer.data
    });
};
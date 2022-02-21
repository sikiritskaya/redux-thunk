export const CREATION_POST_SUCCESS = 'CREATION_POST_SUCCESS';
export const CREATION_POST_STARTED = 'CREATION_POST_STARTED';
export const CREATION_POST_FAILURE = 'CREATION_POST_FAILURE';


export const addPost = ({title, body}) => {
    return (dispatch, getState) => {
        dispatch(addPostStarted());
        console.log('current state:', getState());
        fetch(process.env.REACT_APP_API_URL,
            {
                method: 'POST',
                body: JSON.stringify(
                    {
                        "userId": 1,
                        "title": title,
                        "body": body
                    }
                ),
                headers: {
                    "Content-type": "application/json; charset=utf-8"
                }
            })
            .then(response => {
                response.json().then(data => ({
                    data: data,
                    status: response.status
                })).then(res => {
                    dispatch(addPostSuccess(res.data));
                })
            })
            .catch(err => {
                dispatch(addPostFailure(err.message));
            });
    };
};

const addPostSuccess = (post) => ({
    type: CREATION_POST_SUCCESS,
    payload: {
        ...post
    }
});

const addPostStarted = () => ({
    type: CREATION_POST_STARTED
});


const addPostFailure = (error) => ({
    type: CREATION_POST_FAILURE,
    payload: {
        error
    }
});
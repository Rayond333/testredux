export const bienenhausAnlegen = (bienenhaus) => {
    return (dispatch, getState) => {
        // make async call to database
        dispatch({ type: 'CREATE_BIENENHAUS', bienenhaus: bienenhaus});
    }
};
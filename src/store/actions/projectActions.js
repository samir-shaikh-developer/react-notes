export const createProject = (project) => {
  return (dispatch, getState, {  getFirebase, getFirestore }) => {
    // Make asyn call to dB
    dispatch( {type: 'CREATE_PROJECT', project } );

}

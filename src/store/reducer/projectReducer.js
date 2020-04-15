const initState = {
  projects: [
    {id:1, title:'Learn Flutter', content: 'Just did it'},
    {id:2, title:'Learn Flutter', content: 'Just did it'},
    {id:3, title:'Learn Flutter', content: 'Just did it'}
  ]
}

const projectReducer = (state = initState, action) => {
  switch(action.type){
    case 'CREATE_PROJECT':
      console.log('created Project', action.project);
    break;
  }
  return state
}

export default projectReducer

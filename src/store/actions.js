const addUser = (user)=>({ type: 'ADD_USER', payload: user });
const deleteUser = (userId)=>({ type: 'DELETE_USER', payload: userId });
const clearUsers = ()=>({ type: 'CLEAR_USERS'});

export { addUser, deleteUser, clearUsers }
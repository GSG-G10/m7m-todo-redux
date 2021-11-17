const listReducer = (state = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [], action) => {
    switch(action.type){
        case 'ADD': state.push(action.payload);
                    localStorage.setItem('tasks', JSON.stringify(state));
                    return state;
        case 'REMOVE':  const temp = state.filter(item => !item.end);
                        localStorage.setItem('tasks', JSON.stringify(temp));
                        return temp;
        case 'END' : const temp1 = state.map(item => {
            if(item.id === action.payload)
                item.end = item.end ? false : true;
            return item;
        });
                    localStorage.setItem('tasks', JSON.stringify(temp1));
                    return temp1;
        default : return state;
    }
};

export default listReducer;
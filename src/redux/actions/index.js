const addItem = (payload) => ({type: 'ADD', payload});

const removeItems = (payload) => ({type: 'REMOVE', payload});

const endTask = (payload) => ({type: "END", payload});

export {addItem, removeItems, endTask};
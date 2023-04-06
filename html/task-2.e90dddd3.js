//! изначальный код 
//! Должно работать так
const users=[{name:"Mango",active:!0},{name:"Poly",active:!1},{name:"Ajax",active:!0},{name:"Lux",active:!1}];console.table(users);const toggleUserState=(e,t)=>new Promise((a=>{a(e.map((e=>e.name===t?{...e,active:!e.active}:e)))})),logger=e=>console.table(e);toggleUserState(users,"Mango").then(logger),toggleUserState(users,"Lux").then(logger);
//# sourceMappingURL=task-2.e90dddd3.js.map

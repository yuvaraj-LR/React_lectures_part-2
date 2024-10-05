
// store, next, action

// export const loggerMiddleware = (store)=>{
//     return function(next){
//         return function(action){
//             // log actions
//             console.log("[LOG]: "+action.type+ " "+ new Date().toString());
//             // call next middleware in pipeline.
//             next(action);
//             // log the modified state of app.
//             console.log(store.getState());
//         }
//     }
// }

// Redux middleware consists of store, next, action. 
export const loggerMiddleware = (store) => {
    return function(next) {
        return function(action) {
            // Log actions
            console.log("[LOG]: " + action.type + " " + new Date().toISOString());
            // Call the next middleware in the pipeline.
            next(action);
            // Log the store of the application.
            console.log("[CURRENT STATE]: ", store.getState());
        }
    }
}
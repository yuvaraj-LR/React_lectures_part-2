// create and export middleware function here

// store, next and action
export const loggerMiddleware = (store) => {
    return function(next) {
        return function(action) {
            // log the action
            console.log("[LOG]: " + action.type + " " + new Date().toString());

            // call next middleware
            next(action);

            // log the state
            console.log("[CURRENT STATE]: " + store.getState());
        }
    }
}
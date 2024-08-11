import {createContext, useContext, useState} from "react";

// create post context here
const postContext = createContext();

// Create custom hook that returns context value here
function usePostContext() {
    const value = useContext(postContext);
    return value;
}

// create a custom saved post provider here with add and reset functions
function CustomPostContext({children}) {
    // Logics should be handle.
    const [savedPosts, setSavedPosts] = useState([]);
    const [showSavedList, setShowSavedList] = useState(false);

    function clear() {
        setSavedPosts([]);
    }

    function saveImage(id, name, img_url) {
        const post = {
            "id": id,
            "text": name,
            "img": img_url
        }
        
        setSavedPosts([...savedPosts, post]);
    }

    return(
        <postContext.Provider value={{showSavedList, setShowSavedList, savedPosts, setSavedPosts, clear, saveImage}}>
            {children}
        </postContext.Provider>
    )
}

export {usePostContext};
export default CustomPostContext;

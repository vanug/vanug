import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext(null);

export default function GlobalState ({children}){
    const [loading,setLoading]=useState(false)
    const [recipeList,setRecipeList]=useState([])
    const [searchParam,setSearchParam]=useState('')
    const [favoriteList,setFavoriteList]=useState([])
    const [recipeDetailsData, setRecipeDetailsData] = useState(null);

    const navigate=useNavigate()

    async function handleSubmit(event){
        event.preventDefault()
        try {
            const res =await fetch( `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`)

            const data = await res.json()
            if(data?.data?.recipes){
                setRecipeList(data?.data?.recipes);
                setLoading(false)
                setSearchParam('')
                navigate('/')
            }
        } catch (error) {
            setSearchParam('')
            setLoading(false)
        }
    }

    function handleAddToFavorite(getCurrentItem){
        let cpyFavoriteList=[...favoriteList]
        const index = cpyFavoriteList.findIndex(item=> item.id === getCurrentItem.id)
        if (index==-1) {
            cpyFavoriteList.push(getCurrentItem)
        } else {
            cpyFavoriteList.splice(getCurrentItem)
        }
        setFavoriteList(cpyFavoriteList)
    }
    return(
        <GlobalContext.Provider value={{
            searchParam,
            setSearchParam,
            loading,
            recipeList,
            favoriteList,
            handleAddToFavorite,
            recipeDetailsData,
            setRecipeDetailsData,
            handleSubmit
            }}>
       {children}
    </GlobalContext.Provider>
    )

}




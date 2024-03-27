import { createContext, useReducer, useContext } from "react"

import recipesReducer from "@/reducers/recipesReducer"

import Recipes from "@/constants/Recipes"

export const RecipesContext = createContext(null)
export const RecipesDispatchContext = createContext(null)

export function RecipesProvider({ children }) {

  const [recipes, dispatch] = useReducer(recipesReducer, Recipes)

  return(
    <RecipesContext.Provider value={recipes}>
      <RecipesDispatchContext.Provider value={dispatch}>
        {children}
      </RecipesDispatchContext.Provider>
    </RecipesContext.Provider>
  )

}

export function useRecipes() {
  return useContext(RecipesContext)
}

export function useRecipesDispatch() {
  return useContext(RecipesDispatchContext)
}
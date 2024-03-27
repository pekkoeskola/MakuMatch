export default function recipesReducer(recipes, action) {
  switch(action.type){
    case "liked":{
      return recipes.map(r => {
        if(r.id === action.id){
          return {
            ...r,
            liked: true
          }
        }
        else{
          return r
        }
      })
    }
  }
}
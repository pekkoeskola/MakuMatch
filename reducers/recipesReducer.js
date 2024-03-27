export default function recipesReducer(recipes, action) {
  switch(action.type){
    case "liked":{
      return recipes.map(r => {
        if(r.id === action.id){
          return {
            ...r,
            status: 1
          }
        }
        else{
          return r
        }
      })
    }
    case "saved":{
      return recipes.map(r => {
        if(r.id === action.id){
          return {
            ...r,
            status: 2
          }
        }
        else{
          return r
        }
      })
    }
  }
}
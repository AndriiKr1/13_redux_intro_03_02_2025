export type SandwichAction = 
| { type: 'ingredients/add', payload: 'bread' | 'cheese' | 'salami' | 'tomato' }
| { type: 'ingredients/delete' }
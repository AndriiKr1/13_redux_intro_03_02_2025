export type ActionCounter = 
| { type: "counter/change"; payload: number };
// | { type: 'counter/minus' }
// | { type: 'counter/plus' }
// | { type: 'counter/plus10' }


// { type: string, payload?: any }
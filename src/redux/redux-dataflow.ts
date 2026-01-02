

// User Click
//    ↓
// dispatch(action)     →  { type: 'counter/increment' }
//    ↓
// Store → Reducer call (prevState + action)
//    ↓
// Reducer → newState return karta hai
//    ↓
// Store newState save karta hai
//    ↓
// useSelector wale components re-render
//    ↓
// UI update hoti hai
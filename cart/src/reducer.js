const reducer = (state, action) => {
  if (action.type === 'CLEAR_ALL') {
    return { ...state, cart: [] };
  }
  if (action.type === 'REMOVE_ITEM') {
    let tempCart = state.cart.filter((item) => item.id !== action.payload);
    return { ...state, cart: tempCart };
  }
  if (action.type === 'INCREASE') {
    let temCart = state.cart.map((item) => {
      if (item.id === action.payload) {
        return { ...item, amount: item.amount + 1 };
      }
      return item; // Add this line to return the item when the condition is not met
    });
    return { ...state, cart: temCart };
  }
  if (action.type === 'DECREASE') {
    let tempCart = state.cart.map((item) => {
      if (item.id === action.payload) {
        return { ...item, amount: item.amount <= 0 ? 0 : item.amount - 1 };
      }
      return item;
    });
    return { ...state, cart: tempCart };
  }

  if (action.type === 'GET_TOTALS') {
    let { total, amount } = state.cart.reduce(
      (total, item) => {
        const { amount, price } = item;
        total.amount += amount;
        const itemTotal = amount * price;
        total.total += itemTotal;
        return total;
      },
      {
        total: 0,
        amount: 0,
      }
    );
    total = parseFloat(total.toFixed(2));
    return { ...state, total, amount };
  }
  if (action.type === 'LOADING') {
    return { ...state, loading: true };
  }
  if (action.type === 'DISPLAY_ITEMS')
    return { ...state, cart: action.payload, loading: false };
  return state;
};

export default reducer;

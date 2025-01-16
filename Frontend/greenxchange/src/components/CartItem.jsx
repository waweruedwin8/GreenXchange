function CartItem({ item, onRemove }) {
    return (
      <div className="flex items-center justify-between p-4 border-b">
        <div>
          <h3 className="text-lg font-bold">{item.name}</h3>
          <p>${item.price} x {item.quantity}</p>
        </div>
        <button
          onClick={() => onRemove(item.id)}
          className="text-red-500 hover:underline"
        >
          Remove
        </button>
      </div>
    );
  }
  
  export default CartItem;
  
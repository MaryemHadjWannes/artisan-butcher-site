import React from "react";
import { useCart } from "@/hooks/use-cart";
import { Button } from "@/components/ui/button";

const Panier = () => {
  const { items, removeFromCart, clearCart } = useCart();
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-6">Votre Panier</h2>
      {items.length === 0 ? (
        <div className="text-muted-foreground">Votre panier est vide.</div>
      ) : (
        <>
          <div className="space-y-4 mb-6">
            {items.map((item) => (
              <div key={item.id} className="flex items-center gap-4 border-b pb-4">
                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                <div className="flex-1">
                  <div className="font-semibold">{item.name}</div>
                  <div className="text-sm text-muted-foreground">{item.category}</div>
                  <div className="text-sm">{item.price.toFixed(2)}€ x {item.quantity}</div>
                </div>
                <Button size="sm" variant="destructive" onClick={() => removeFromCart(item.id)}>
                  Retirer
                </Button>
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center mb-4">
            <span className="font-bold text-lg">Total :</span>
            <span className="text-xl">{total.toFixed(2)}€</span>
          </div>
          <Button variant="outline" onClick={clearCart}>Vider le panier</Button>
        </>
      )}
    </div>
  );
};

export default Panier;

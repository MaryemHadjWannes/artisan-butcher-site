import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "@/hooks/use-cart";

interface ProductCardProps {
  id: number;
  name: string;
  category: string;
  price: number;
  unit: string;
  image: string;
  description?: string;
}

import { useState } from "react";

const ProductCard = (props: ProductCardProps) => {
  const { id, name, category, price, unit, image, description } = props;
  const { addToCart } = useCart();
  const [qty, setQty] = useState(1);
  const handleAdd = () => {
    if (qty > 0) {
      addToCart({
        id: String(id),
        name,
        price,
        image,
        category,
        quantity: qty,
      });
    }
  };
  return (
  <Card className="group flex flex-col h-full overflow-hidden hover:shadow-elegant transition-all duration-300">
      <CardHeader className="p-0">
        <div className="relative aspect-square overflow-hidden bg-muted">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
          <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
            {category}
          </Badge>
        </div>
      </CardHeader>
  <CardContent className="p-4 flex-1 flex flex-col">
        <h3 className="text-lg font-semibold mb-2">{name}</h3>
        {description && (
          <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
        )}
      </CardContent>
      <CardFooter className="p-4 pt-0 mt-auto">
        <div className="flex items-end justify-between w-full gap-2">
          <div>
            <span className="text-2xl font-bold text-primary">{price.toFixed(2)}€</span>
            <span className="text-sm text-muted-foreground">/ {unit}</span>
          </div>
          <div className="flex items-end gap-2">
            <input
              type="number"
              min={1}
              step={1}
              value={qty}
              onChange={e => setQty(Number(e.target.value))}
              className="w-16 border rounded px-2 py-1 text-sm"
              aria-label="Quantité en kg"
            />
            <Button size="icon" onClick={handleAdd} variant="secondary" aria-label="Ajouter au panier">
              <FaShoppingCart className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;

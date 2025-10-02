import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";

interface ProductCardProps {
  id: number;
  name: string;
  category: string;
  price: number;
  unit: string;
  image: string;
  description?: string;
}

const ProductCard = ({ name, category, price, unit, image, description }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden hover:shadow-elegant transition-all duration-300">
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
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold mb-2">{name}</h3>
        {description && (
          <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
        )}
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <div className="flex items-baseline justify-between w-full">
          <span className="text-2xl font-bold text-primary">{price.toFixed(2)}€</span>
          <span className="text-sm text-muted-foreground">/ {unit}</span>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;

import type { productTable, productVariantTable } from "@/db/schema";
import { formatCentsToBRL } from "@/helpers/money";
import Image from "next/image";
import Link from "next/link";

interface ProductItemProps {
  product: (typeof productTable.$inferSelect & {
    variants: (typeof productVariantTable.$inferSelect)[];
  });
}

const ProductItem = ( { product }: ProductItemProps) => {
    const firstVariant = product.variants[0];

    const dirtyUrlString = firstVariant.imageUrl;

    let cleanImageUrl = '/placeholder.png'; 

    if (dirtyUrlString && dirtyUrlString.startsWith('{"') && dirtyUrlString.endsWith('"}')) {
      cleanImageUrl = dirtyUrlString.slice(2, -2);
    }
  
return (
  <Link href={`/product/${product.id}`} key={product.id} className="flex flex-col gap-4">
      <Image
        src={cleanImageUrl}
        alt={firstVariant.name}
        width={200}
        height={200}
        className="rounded-3xl"
      />
    <div className="flex flex-col gap-1 max-w-[200px]">
      <p className="truncate text-sm font-medium">{product.name}</p>
      <p className="text-muted-foreground truncate text-xs font-medium">
        {product.description}
      </p>
      <p className="truncate text-sm font-semibold">
        {formatCentsToBRL(firstVariant.priceInCents)}
      </p>
    </div>
  </Link> 
)
}

export default ProductItem;
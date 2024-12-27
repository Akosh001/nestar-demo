import { useRouter } from "next/router";

const PropertyList = () => {
  const router = useRouter();
  const { productId } = router.query;
  return (
    <div>
      Property List {productId} {""}
    </div>
  );
};

export default PropertyList;

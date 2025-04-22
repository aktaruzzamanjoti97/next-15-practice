const ProductDetails = async ({
	params,
}: {
	params: Promise<{ productId: string }>;
}) => {
    const { productId } = (await params).productId;
	return <div>ProductDetails</div>;
};

export default ProductDetails;

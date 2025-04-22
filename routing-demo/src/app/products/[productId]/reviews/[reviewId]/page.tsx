import { notFound } from 'next/navigation';

const ProductReview = async ({
	params,
}: {
	params: Promise<{ productId: string; reviewId: string }>;
}) => {
	const { productId, reviewId } = await params;
	if (parseInt(reviewId) > 1000) {
		notFound();
	}
	return (
		<div>
			Review {reviewId} for {productId}
		</div>
	);
};

export default ProductReview;

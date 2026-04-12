import Image from "next/image";
import Link from "next/link";

const FoodCard = ({ food }) => {
    const { id, dish_name, image_link, category, rating, price, cuisine, origin_and_popularity } = food

    return (
        <div className="card bg-base-100 shadow-sm">
            <figure>
                <Image
                    src={image_link}
                    alt={dish_name}
                    width={300}
                    height={300} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {dish_name}
                    <div className="badge badge-secondary">{rating}</div>
                </h2>
                <p>Category: {category}</p>
                <p className="text-lg font-bold text-green-400">Price: ${price}</p>
                <p>Cuisine: {cuisine}</p>
                <p>Origin and Popularity: {origin_and_popularity}</p>
                <div className="card-actions justify-end">

                    <button className="btn btn-success rounded-2xl">Add to Cart</button>

                    <Link href={`/foods/${id}`}>
                        <button className="btn btn-info rounded-2xl">Show Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;
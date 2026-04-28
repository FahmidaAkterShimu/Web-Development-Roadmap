import Image from "next/image";

const FoodDetailPage = async ({ params }) => {
    const { foodId } = await params;

    const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/foods/${foodId}`)
    const obj = await res.json();
    const food = obj.data;

    const { id, dish_name, image_link, main_ingredients } = food;

    return (
        <div>
            <h2 className="text-4xl mb-4">Show Details of food: {foodId}</h2>
            <h3 className="text-3xl">{dish_name}</h3>
            <Image className="mx-auto"
                width={300} height={300} src={image_link} alt={dish_name}>
            </Image>
            <h2 className="text-2xl">Ingredients: </h2>
            <ul className="list-disc">
                {
                    main_ingredients.map(((ingredient, ind) =>
                        <li key={ind}>{ingredient}</li>
                    ))
                }
            </ul>
        </div>
    );
};

export default FoodDetailPage;
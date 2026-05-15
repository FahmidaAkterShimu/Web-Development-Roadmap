import Image from "next/image";

const FoodDetailPage = async ({ params }) => {
    const { foodId } = await params;

    const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/foods/${foodId}`)
    const obj = await res.json();
    const food = obj.data;

    const { id, dish_name, image_link, main_ingredients, approximate_nutrition_per_serving, alternative_names } = food;

    return (
        <div className="space-y-4">
            <h2 className="text-4xl mb-4">Show Details of food: {foodId}</h2>
            <h3 className="text-3xl">{dish_name}</h3>
            <Image className="mx-auto"
                width={300} height={300} src={image_link} alt={dish_name}>
            </Image>

            <h2 className="text-2xl text-green-400">Alternative Names: </h2>
            <ul className="list-disc">
                {
                    alternative_names.map(((alt_name, ind) =>
                        <li key={ind}>{alt_name}</li>
                    ))
                }
            </ul>

            <h2 className="text-2xl text-green-400">Ingredients: </h2>
            <ul className="list-disc">
                {
                    main_ingredients.map(((ingredient, ind) =>
                        <li key={ind}>{ingredient}</li>
                    ))
                }
            </ul>

            <h2 className="text-2xl text-green-400">Nutrition Per Serving</h2>
            <ul className="list-disc">
                {Object.entries(approximate_nutrition_per_serving).map(([key, value]) => (
                    <li key={key}>
                        <strong className="text-blue-300 text-lg">{key}:</strong> {value}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FoodDetailPage;
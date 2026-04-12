import FoodCard from "@/components/FoodCard";

const FoodsPage = async () => {
    // const res = await fetch('');
    // const data = await res.json();


    const res = await fetch('https://phi-lab-server.vercel.app/api/v1/lab/foods');
    const odj = await res.json();
    const foods = odj.data

    return (
        <div>
            <h2 className="text-4xl">Foods: {foods.length}</h2>

            <div className="grid md:grid-cols-3 gap-4 mx-auto">
                {
                    foods.map(food => <FoodCard key={food.id} food={food}></FoodCard>)
                }
            </div>
        </div>
    );
};

export default FoodsPage;
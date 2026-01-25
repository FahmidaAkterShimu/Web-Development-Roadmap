const money = 500;

if(money >= 300){
    console.log('You can eat setMenu from PizzaBurg');
}

else{
    if(money >= 100){
        console.log('You can eat from food court');
    }
    else{
        if(money >= 50){
            console.log('You can eat a burger');
        }
        else{
            console.log('You can eat fuchka');
        }
    }
}

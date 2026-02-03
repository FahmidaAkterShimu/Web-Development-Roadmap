function woodQuantity(chair, table, bed) {
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const chairTotalWood = perChairWood * chair;
    const tableTotalWood = perTableWood * table;
    const bedTotalWood = perBedWood * bed;

    const totalWood = chairTotalWood + tableTotalWood + bedTotalWood;
    return totalWood;
}

console.log("Total Wood needed:", woodQuantity(4, 1, 1));

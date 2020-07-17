// problem 1: feetToMile >>

function feetToMile(feet) {
    const mile = feet / 5280;
    if (feet < 0) {
        return "Distance cannot be negative"
    }
    return mile.toFixed(4);
}



// problem 2: woodCalculator >>

function woodCalculator(chair, table, bed) {
    const chairWood = chair * 1;
    const tableWood = table * 3;
    const bedWood = bed * 5;
    const totalWood = chairWood + tableWood + bedWood;
    return totalWood;
}



// problem 3: brickCalculator >>

function brickCalculator(floors) {
    const brickPerFeet = 1000;
    if (floors <= 0) {
        return "We don't consider underground floors";
    }
    else if (floors >= 1 && floors <= 10) {
        let feetPerFloor = 15;
        const totalFeet = feetPerFloor * floors;
        let totalBrick = brickPerFeet * totalFeet;
        return totalBrick;
    }
    else if (floors >= 11 && floors <= 20) {
        let feetPerFloor = 12;
        const totalFeet = feetPerFloor * (floors - 10);
        let totalBrick = 150000 + brickPerFeet * totalFeet;
        return totalBrick;
    }
    else if (floors >= 21) {
        let feetPerFloor = 10;
        const totalFeet = feetPerFloor * (floors - 20);
        let totalBrick = 270000 + brickPerFeet * totalFeet;
        return totalBrick;
    }
}



// problem 4: tinyFriend >>

function tinyFriend(friendsName) {
    if (friendsName.length === 0) {
        return "No Name In the Array";
    }
    let tiny = friendsName[0];
    for (let i = 1; i < friendsName.length; i++) {
        if (tiny.length > friendsName[i].length) {
            tiny = friendsName[i];
        }
    }
    return tiny;
}
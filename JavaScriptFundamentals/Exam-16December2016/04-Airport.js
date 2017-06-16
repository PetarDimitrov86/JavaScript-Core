function calculateTraffic(planesInfo){
    let landedPlanes = new Set();
    let allStats = new Map();

    for (let plane of planesInfo){
        let planeInfo = plane.split(' ');
        let planeID = planeInfo[0];
        let town = planeInfo[1];
        let passengersCount = Number(planeInfo[2]);
        let action = planeInfo[3];

        if (action == 'land'){
            let oldLandedCount = landedPlanes.size;
            landedPlanes.add(planeID);
            if (oldLandedCount != landedPlanes.size){
                if (!allStats.has(town))
                    allStats.set(town, {planes: new Set(), arrivals: 0, departures: 0});
                allStats.get(town).planes.add(planeID);
                allStats.get(town).arrivals += passengersCount;
            }
        }
        else if (action == 'depart') {
            if (landedPlanes.has(planeID)){
                landedPlanes.delete(planeID);
                if (!allStats.has(town))
                    allStats.set(town, {planes: new Set(), arrivals: 0, departures: 0});
                allStats.get(town).planes.add(planeID);
                allStats.get(town).departures += passengersCount;
            }
        }
    }

    console.log('Planes left:');
    for (let plane of Array.from(landedPlanes).sort((a, b) => a.localeCompare(b)))
        console.log(`- ${plane}`)

    let sortedTowns = Array.from(allStats).sort(townsSort);

    for (let [town, stats] of sortedTowns) {
        console.log(town);
        console.log(`Arrivals: ${stats.arrivals}`);
        console.log(`Departures: ${stats.departures}`);
        console.log('Planes:');
        for (let plane of Array.from(stats.planes).sort((a, b) => a.localeCompare(b)))
            console.log(`-- ${plane}`)
    }

    function townsSort(t1, t2) {
        if (t1[1].arrivals > t2[1].arrivals)              // DESCENDING SORT
            return -1;
        if (t1[1].arrivals < t2[1].arrivals)
            return 1;
        if (t1[0].toLowerCase() < t2[0].toLowerCase())         // ASCENDING SORT
            return -1;
        if (t1[0].toLowerCase() > t2[0].toLowerCase())
            return 1;
        return 0;
    }
}

calculateTraffic(
    [
        'Airbus London 100 land',
        'Airbus Paris 200 depart',
        'Airbus Madrid 130 depart',
        'Airbus Lisbon 403 depart',
        'Airbus Moscow 505 depart',
        'Airbus Sofia 16 depart'
    ]);
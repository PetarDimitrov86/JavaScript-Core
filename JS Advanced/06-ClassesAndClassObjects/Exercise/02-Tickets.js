function getSortedTickets(arr, sortCriteria){
    class Ticket{
        constructor(destination, price, status){
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }
    let tickets = [];
    for (let tckt of arr){
        let ticketInfo = tckt.split('|');
        let destination = ticketInfo[0];
        let price = Number(ticketInfo[1]);
        let status = ticketInfo[2];
        tickets.push(new Ticket(destination, price, status))
    }
    switch (sortCriteria){
        case 'destination' :
            return tickets.sort( (t1, t2) => {
                if (t1.destination < t2.destination)                // ASCENDING SORT
                    return -1;
                if (t1.destination > t2.destination)
                    return 1;
                return 0;
            });
            break;
        case 'price':
            return tickets.sort( (t1, t2) => t1.price - t2.price);  // ASCENDING SORT
            break;
        case 'status':
            return tickets.sort( (t1, t2) => {
                if (t1.status < t2.status)                          // ASCENDING SORT
                    return -1;
                if (t1.status > t2.status)
                    return 1;
                return 0;
            });
            break;
    }

    // Shorter version, thanks to Anna
    // switch (sortingCriteria) {
    //     case 'price':
    //         tickets.sort((a, b) => a.price - b.price);
    //         break;
    //     case 'destination':
    //         tickets.sort((a, b) => a.destination.localeCompare(b.destination));
    //         break;
    //     case 'status':
    //         tickets.sort((a, b) => a.status.localeCompare(b.status));
    //         break;
    // }
}

console.log(getSortedTickets(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
        'destination'));

console.log(getSortedTickets(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
        'status'
));
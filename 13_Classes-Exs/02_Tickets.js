function sortTickets(ticketsData, criteria) {
    function Ticket(destination,price, status) {
    this.destination= destination;
    this.price=+price;
    this.status=status;
    }

    let tickets = ticketsData.reduce((acc,cur)=>{
        let[destination,price, status] = cur.split('|').filter(e=>e!=="");
        acc.push(new Ticket(destination,price, status));
        return acc;
    },[]);

    if(criteria === 'price'){
        return tickets.sort((a, b) => a[criteria]-b[criteria]);
    }else{
        return tickets.sort((a, b) => a[criteria].localeCompare(b[criteria]));
    }
}

sortTickets(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'status');

// sortTickets(
//     ['Philadelphia|94.20|available',
//         'New York City|95.99|available',
//         'New York City|95.99|sold',
//         'Boston|126.20|departed'],
//     'price');
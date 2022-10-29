class restaurantManager{
    restaurantList=[
        {
            id: 1,
            restaurantName: 'KFC',
            address: 'Anand Vihar',
            city: 'Delhi'
        },
        {
            id: 2,
            restaurantName: 'Domino',
            address: 'Savita Vihar',
            city: 'Delhi'
        },
        {
            id: 3,
            restaurantName: 'Burger King',
            address: 'Civil Lines',
            city: 'Pune'
        },
        {
            id: 4,
            restaurantName: 'Subway',
            address: 'Cantonment',
            city: 'Mumbai'
        }
    ]

    printAllRestaurantNames= () => {
        return this.restaurantList.map((data) => {
            return data.restaurantName
        })
    }

    filterRestaurantByCity=(cityName) => {
        return this.restaurantList.filter((data) => {
            return data.city === cityName
        })
    }
}

let restObj = new restaurantManager();

var orderData = {
    'Below 500': 20,
    '500-1000': 29,
    '1000-1500': 30,
    '1500-2000': 44,
    'Above 2000': 76
};

let out = 0;
for(key in orderData){
    out += Number(orderData[key])
}


function getPercent(orderData){
    let total = 0;
    for(key in orderData){
        total += Number(orderData[key])
    }

    let output = [];
    let count = 0;
    for(key in orderData){
        let percentValue = ((orderData[key]/total)*100).toFixed(2)
        count = count+1;
        let myObj = {};
        myObj.id = count;
        myObj.order = key;
        myObj.order_percent = `${percentValue}%`;
        myObj.restaurant="Punjabi Tadka"
        output.push(myObj)
    }

    return output
}

console.log(getPercent(orderData))
const fs = require('fs')


// read JSON files
const loadOrders = () => {

        try{
            const dataBuffer = fs.readFileSync('order.json')
            const orderJSON = dataBuffer.toString()
            return JSON.parse(orderJSON)
        }
        catch(e){
            return []
        }

}


const takeOrder = (orders) => {
    console.log('--> takeOrder')
    const orderJSON = JSON.stringify(orders)
    fs.writeFileSync('orders.json', orderJSON)
    
}

const listOrders = () => {
    console.log('--> listOrders')
    const allOrders = loadOrders()

    allOrders.map((order) => {
        console.log(order.Reminder)
    })
}

const deleteOrder = (deleteOrder) => {
    console.log('--> deleteOrder')

    const allOrders = loadOrders()
    const orderToKeep = allOrders.filter((order) => {
        return order.Reminder !== deleteOrder
    })
    
    takeOrder(orderToKeep)
}

module.exports = {
    takeOrder,
    listOrders,
    deleteOrder
}
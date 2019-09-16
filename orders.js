const fs = require('fs')


const addOrder = (myOrder) => {
    console.log('---> orderjs addOrder')

    const allOrders = loadNotes()
    
    allOrders.push({Reminder:myNotes})
    
    loadOrders(allOrders)
    
}



//loadNotes
const loadOrders = () => {

        try{
            const dataBuffer = fs.readFileSync('orders.json')
            const orderJSON = dataBuffer.toString()
            return JSON.parse(orderJSON)
        }
        catch(e){
            return []
        }
}

// saveNotes
const takeOrder = (orders) => {
    console.log('--> takeOrder')
    const orderJSON = JSON.stringify(orders)
    fs.writeFileSync('orders.json', orderJSON)
}

//listNotes
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
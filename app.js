const {takeOrder, listOrders, deleteOrder} = require('./orders')
const yargs = require('yargs')

let command = process.argv[2]

if(command == "take"){
    console.log('take order')
    takeOrder()

} else if(command == "list"){
    console.log('list order')
    listOrders()

} else if(command == "delete"){
    console.log('delete order')
    deleteOrder()
}
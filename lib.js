'use strict'

const entries =
  obj =>
    Object.keys(obj)
      .map(key => [key, obj[key]])

const listing =
  (name, price) => ({
    name,
    price
  })

const customer =
  (name, shoppingList) => ({
    name,
    shoppingList
  })

const cart =
  (customer, ...items) => ({
    customer,
    items
  })

/**
 * should return an array with the `itemName` repeated `count` number of times
 */
const itemRepeater =
  itemName =>
    count => new Array(count).fill(itemName)

/**
 * should return an array of carts with each given customer's shopping list
 * as an array of items
 * [{
 *  customer: 'charles',
 *  items: ['celery', 'celery', 'taco']
 * },{
 *  customer: 'charles',
 *  items: ['celery', 'celery', 'taco']
 * }]
 */
const constructCarts =
  listings =>
    customers => {
      return customers.map(
        (customerObject) => {
          return {
            customer: customerObject.name,
            items: entries(customerObject.shoppingList).reduce(
              (previous, keyPair) => {
                return previous.concat(itemRepeater(keyPair[0])(keyPair[1]))
              }, [])
          }
        })
    }

module.exports = {
  listing,
  customer,
  constructCarts
}

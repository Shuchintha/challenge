'use strict'
const mockDBCalls = require('../database/index.js')

const getListOfAgesOfUsersWithHandler = async (request, response) => {
  try {
    const itemToLookup = request.params.itemSelected

    const data = await mockDBCalls.getListOfAgesOfUsersWith(itemToLookup)
    return response.status(200).send(JSON.stringify(data))
  } catch (error) {
    return response.status(500).send(JSON.stringify(error))
  }
}

module.exports = app => {
  app.get('/users/age/:itemSelected', getListOfAgesOfUsersWithHandler)
}

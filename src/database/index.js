'use strict'
const _ = require('lodash')
const db = require('./db.js')

// UTILS
//----------------
// This is a mock db call that waits for # milliseconds and returns
const mockDBCall = dataAccessMethod => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(dataAccessMethod())
    }, 500)
  })
}

// MOCK DB CALLS
//----------------
const getUsers = () => {
  const dataAccessMethod = () => _.map(db.usersById, userInfo => userInfo)
  return mockDBCall(dataAccessMethod)
}

// DB call for Items
const getItems = () => {
  const dataAccessMethod = () => {
    const setOfItems = new Set()
    const userItemList = Object.values(db.itemsOfUserByUsername)
    userItemList.forEach(userItems => {
      userItems.forEach(item => {
        if (!setOfItems.has(item)) setOfItems.add(item)
      })
    })
    return [...setOfItems]
  }

  return mockDBCall(dataAccessMethod)
}

// DB call for List Of Ages Of Users With ...
const getListOfAgesOfUsersWith = itemSelected => {
  const dataAccessMethod = () => {
    // fill me in :)
    const ageDemographicMap = new Map()
    const usersMap = new Map()

    for (const [user, items] of Object.entries(db.itemsOfUserByUsername)) {
      if (items.some(item => itemSelected === item)) {
        usersMap.set(user, user)
      }
    }
    for (const [id, user] of Object.entries(db.usersById)) {
      if (usersMap.has(user.username)) {
        if (ageDemographicMap.has(user.age))
          ageDemographicMap.set(user.age, ageDemographicMap.get(user.age) + 1)
        else ageDemographicMap.set(user.age, 1)
      }
    }

    const ageDemographicArray = []
    ageDemographicMap.forEach((count, age) => {
      ageDemographicArray.push({ age, count })
    })
    return ageDemographicArray
  }
  return mockDBCall(dataAccessMethod)
}

module.exports = {
  getUsers,
  getItems,
  getListOfAgesOfUsersWith,
}

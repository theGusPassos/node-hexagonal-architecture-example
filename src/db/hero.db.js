// an in memory database
// mocking async requests

const heroes = [{id: 1, name: 'default', level: 10, createdAt: new Date()}]

const getAll = async() => {
  return Promise.resolve(heroes)
}

const saveHero = async(hero) => {
  heroes.push(hero)
  return Promise.resolve(hero)
}

export default {
  getAll,
  saveHero,
}


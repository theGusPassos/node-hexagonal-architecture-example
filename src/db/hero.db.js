// an in memory database
// mocking async requests

const heroes = []

const getAll = async() => {
  return Promise.resolve(heroes)
}

const createHero = async(hero) => {
  heroes.push(hero)
  return Promise.resolve(hero)
}

export default {
  getAll,
  createHero,
}


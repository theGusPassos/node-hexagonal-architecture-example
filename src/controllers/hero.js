import heroAdapter from '../adapters/hero.adapter'
import heroLogic from '../logic/hero.logic'
import heroDb from '../db/hero.db'

const getAll = async(_, res, next) => {
  const heroes = await heroDb.getAll()
  res.send(heroes.map(heroAdapter.toExternal))
}

const create = async(req, res) => {
  const heroToCreate = heroLogic.createHero(heroAdapter.toInternal(req.body))
  const heroCreated = await heroDb.createHero(heroToCreate)
  res.send(heroCreated)
}

export default {
  getAll,
  create,
}

import * as R from 'ramda'
import heroAdapter from '../adapters/hero.adapter'
import heroLogic from '../logic/hero.logic'
import heroDb from '../db/hero.db'

const then = f => p => p.then(f)

const getAll = (_, res) => {
  R.pipe(
    heroDb.getAll,
    then(heroes => heroes.map(heroAdapter.toExternal)),
    then(heroes => res.send(heroes)),
  )()
}

const create = (req, res) => {
  R.pipe(
    heroAdapter.toInternal,
    heroLogic.createHero,
    heroDb.saveHero,
    then(savedHero => res.send(savedHero)),
  )(req.body)
}

export default {
  getAll,
  create,
}

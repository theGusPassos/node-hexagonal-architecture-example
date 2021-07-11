import heroLogic from '../../src/logic/hero.logic'
import faker from 'faker'
import { expect } from '@jest/globals'

describe('hero.logic', () => {
  test('createHero', () => {
    const external = {
      name: faker.random.word(),
      level: faker.datatype.number(100),
    }

    const internal = heroLogic.createHero(external)

    expect(internal).toMatchObject(external)
    expect(internal.id).toBeDefined()
    expect(internal.createdAt).toBeInstanceOf(Date)
  })
})

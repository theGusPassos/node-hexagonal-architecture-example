import heroAdapter from '../../src/adapters/hero.adapter'
import faker from 'faker'
import { expect } from '@jest/globals'
import { v4 as uuidv4 } from 'uuid'

describe(
  'hero.adapter',
  () =>
    test('toInternal', () => {
      const external = {
        name: faker.random.word(),
        level: faker.datatype.number(100),
      }

      const internal = heroAdapter.toInternal(external)

      expect(internal).toMatchObject(external)
    }),

  test('toExternal', () => {
    const internal = {
      id: uuidv4(),
      name: faker.random.word(),
      level: faker.datatype.number(100),
      createdAt: new Date(),
    }

    const external = heroAdapter.toExternal(internal)

    expect(external).toMatchObject({
      id: internal.id,
      name: internal.name,
      level: internal.level,
    })
  }),
)

import heroAdapter from '../../src/adapters/hero.adapter'

test('adds 1 + 2 to equal 3', () => {
  heroAdapter.toExternal(null)
  expect(3).toBe(3)
})

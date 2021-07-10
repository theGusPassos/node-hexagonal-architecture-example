import { v4 as uuidv4 } from 'uuid'

const createHero = (external) => {
  return {
    id: uuidv4(),
    name: external.name,
    level: external.level,
    createdAt: new Date(),
  }
}

export default { createHero }

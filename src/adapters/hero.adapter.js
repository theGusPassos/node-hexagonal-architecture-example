import { v4 as uuidv4 } from 'uuid'

const toInternal = (external) => {
  return {
    id: uuidv4(),
    name: external.name,
    level: external.level,
    createdAt: new Date(),
  }
}

const toExternal = (internal) => {
  return {
    id: internal.id,
    name: internal.name,
    level: internal.level,
  }
}

export default { toInternal, toExternal }

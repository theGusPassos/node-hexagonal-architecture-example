const toInternal = (external) => {
  return {
    name: external.name,
    level: external.level,
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

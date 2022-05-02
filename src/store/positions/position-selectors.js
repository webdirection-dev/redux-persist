export const selectAllPositions = (state) => state.positions

export const selectVisiblePositions = (state, filters = []) => {
    if (filters.length === 0) return state.positions

    return state.positions.filter(i => {
        const posFilters = [].concat(i.role, i.level, ...i.languages, ...i.tools)

        return filters.every(j => posFilters.includes(j))
    })
}
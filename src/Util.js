export const stringToDollar = (val) => {
    const float = parseFloat(Number(val)).toFixed(2)
    return `$${float}`
}

export const getLocalStorage = (queryVal) => JSON.parse(localStorage.getItem(queryVal))

export const setLocalStorage = (lookup, value) => localStorage.setItem(lookup, JSON.stringify(value))

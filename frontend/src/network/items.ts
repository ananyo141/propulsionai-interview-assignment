import { BASE_URL } from './constants'

export const createItem = async (name: string) => {
    const response = await fetch(BASE_URL + '/items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name }),
    })
    const data = await response.json()
    return data
}

export const getItems = async () => {
    return await fetch(BASE_URL + '/items')
      .then(res => res.json())
}

export const searchItems = async (searchParams: string) => {
    return await fetch(BASE_URL + `/items/search?searchParams=${searchParams}`)
      .then(res => res.json())
}

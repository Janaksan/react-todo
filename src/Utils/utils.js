
const TASK_LIST_KEY = 'taskLists';

//get form local storage
export function getFromStorage() {
    return localStorage.getItem(TASK_LIST_KEY);
}

//update to local storage
export function updateToStorage(payload = []) {
    localStorage.setItem(TASK_LIST_KEY, JSON.stringify(payload))
}

export function get() {
    const result = getFromStorage()
    return result ? JSON.parse(result) : []
}

export function getById(id) {
    const existing = get()
    const result = existing.filter(task => task.id === id)
    return (result && result.length) ? result[0] : {}
}


export function createOrUpdate(id, value) {
    const item = getById(id)

    if (item && item.id) {
        return edit(id, value)
    }
    const newItem = { id: id, value: value }
    const existingitems = get()
    existingitems.push(newItem)
    updateToStorage(existingitems)
}

export function edit(id, value) {
    let items = get();
    items = items.map((item) => {
        if (item.id === id) {
            item.value = value
        }
        return item
    })

    updateToStorage(items)
}

//clear all data
export function clearAll() {
    updateToStorage()
}

export function remove(id) {
    let items = get();
    items = items.filter((item) => (item.id !== id))
    updateToStorage(items)
}
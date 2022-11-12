
const TASK_LIST_KEY = 'taskLists';


//get form local storage
export function getList() {
    const items = localStorage.getItem(TASK_LIST_KEY);
    return items ? JSON.parse(items) : []
}

export function getById(id) {
    const existing = getList()
    const result = existing.filter(task => task.id === id)
    return (result && result.length) ? result[0] : {}
}

//save data into local storage
export function save(payload) {
    const exsitingItems = getList();

    if (!exsitingItems) {
        localStorage.setItem(TASK_LIST_KEY, JSON.stringify([]));
    }

    const results = [{
        id: new Date().getTime(),
        value: payload
    }, ...getList()]

    localStorage.setItem(TASK_LIST_KEY, JSON.stringify(results));
}

export function update(payload, task) {

    const items = getList()

    items.map((item) => {
        if (item.id === payload.id) {
            item.value = task
        }
    })

    console.log('items-----', items)

    localStorage.setItem(TASK_LIST_KEY, JSON.stringify(items));
}

//clear all data
export function clearAll() {
    localStorage.setItem(TASK_LIST_KEY, JSON.stringify([]));
}

export function remove(payload) {

    localStorage.setItem(TASK_LIST_KEY, JSON.stringify(payload));
}
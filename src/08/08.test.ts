type UsersType = {
    [key: string]: { id: number, name: string }
}

let users: UsersType

beforeEach(() => {
    users = {
        '101': {id: 101, name: 'Dimych'},
        '323223': {id: 323223, name: 'Natasha'},
        '1212': {id: 1212, name: 'Valera'},
        '1': {id: 1, name: 'Katya'},
    }
})


test("should update corresponding user", () => {
    users['1'].name = 'Ekaterina'

    expect(users["1"]).toEqual({id: 1, name: 'Ekaterina'})

})
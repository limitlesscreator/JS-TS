function increasAge(u: UserType) {
    u.age++
}

type UserType = {
    name: string
    age: number
}

test('reference type test', () => {

    var user: UserType = {
        name: "Dimich",
        age: 32,
    }

    increasAge(user)

    expect(user.age).toBe(33)

    const superman = user

    superman.age = 1000

})

test('array test', () => {

    var users = [
        {
            name: "Dimich",
            age: 32,
        },
        {
            name: "Dimich",
            age: 32,
        },
    ]

    var admins = users

    admins.push({name: 'Bandyugan', age: 10})

    expect(users[2]).toEqual({name: 'Bandyugan', age: 10})

})

test('value type test', () => {
    let usersCount = 100

    let adminsCount = usersCount

    adminsCount = adminsCount + 1
    adminsCount++


    expect(users[2]).toEqual({name: 'Bandyugan', age: 10})


})

test('reference type array', () => {

    const adress = {
        title: "Minsk"
    }

    var user: UserType = {
        name: "Dimich",
        age: 32,
    }
    var user2: UserType = {
        name: "Dimich",
        age: 32,
    }

    const users = [user, user2, {name: "Misha",age: 18}]

    const admins = [user,user2]

    admins[0].name = 'Dmitriy'

    expect(users[0].name).toBe('Dmitriy')

})

test('sort array test', () => {

    const letters = ['c','d','a','z','e']

    letters.sort()

    expect(letters).toEqual(['a','c','d','e','z'])

})
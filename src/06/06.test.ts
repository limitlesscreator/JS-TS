import {ManType} from "./06";


let props: ManType
beforeEach(() => {
    props = props = {
        name: "Dimich",
        age: 32,
        lessons: [{title: "1"}, {title: "2"}],
        address: {
            street: {
                title: "Nezavisimosti street"
            }
        }
    }
})


test("", () => {
    let props = {
        name: "Dimich",
        age: 32,
        lessons: [{title: "1"}, {title: "2"}],
        address: {
            street: {
                title: "Nezavisimosti street"
            }
        }
    }

    // const age = props.age
    // const lesson = props.lesson
    const {age, lessons} = props
    const title = props.address.street.title

    const a = props.age
    const l = props.lessons

    expect(age).toBe(32)
    expect(lessons.length).toBe(2)

    expect(a).toBe(32)
    expect(l.length).toBe(2)
    expect(title).toBe('Nezavisimosti street')

})

test("", () => {
    const l1 = props.lessons[0]
    const l2 = props.lessons[1]

    const [ls1, ls2] = props.lessons

    expect(l1.title).toBe("1")
    expect(l2.title).toBe("2")

    expect(ls1.title).toBe("1")
    expect(ls2.title).toBe("2")
})
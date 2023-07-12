import {classNames} from "./classNames";

describe('classNames', () => {
    test('one param', () => {
        expect(true).toBe(true)
    })
    test('func', () => {
        expect(classNames('class')).toBe('class')
    })
})

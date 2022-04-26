const multiply = require('./multiply');
describe('multiply', () => {
    it('Multiplies 2 numbers', () =>{
        expect(multiply(2, 5)).toBe(10);
    })
})
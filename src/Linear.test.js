const Linear = require('./Linear');

describe('Zeros', () => {
    test('Create a 2 by 2 Matrix using Zeros function.', ()=>{
        const m = Linear.zeros(2,2);
        expect(m).toHaveProperty("_values", [[0,0],[0,0]]);
        expect(m).toHaveProperty("_m",2);
        expect(m).toHaveProperty("_n", 2);

    });
    test('Create a 2 by 1 Matrix using Zeros function.', ()=>{
        const m = Linear.zeros(2,1);
        expect(m).toHaveProperty("_values", [[0],[0]]);
        expect(m).toHaveProperty("_m",2);
        expect(m).toHaveProperty("_n", 1);
    });
    test('Create a 1 by 2 Matrix using Zeros function.', ()=>{
        const m = Linear.zeros(1,2);
        expect(m).toHaveProperty("_values", [0,0]);
        expect(m).toHaveProperty("_m",1);
        expect(m).toHaveProperty("_n", 2);
    });
    test('Create a 0 by 2 Matrix using Zeros function.', ()=>{
        expect(()=> {
            Linear.zeros(0,2);
        }).toThrow();
    });
});

describe('Transpose', ()=>{
    test('Transpose a 3 by 1', ()=>{
        const m = new Linear.Matrix([[1],[2],[3]]);
        console.log(m);
        m.T();
        console.log(m);
        expect(m).toHaveProperty("_values", [1,2,3]);
    })
});

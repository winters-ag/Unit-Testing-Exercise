const greet = require('./greet');

describe('greet',() =>{

    //Test 1 - return Hello, (name)
    it('should return the phrase "Hello, (name)',() =>{
        const name = "Elizabeth";
        expect(greet(name)).toBe("Hello, Elizabeth");
    });

    //Test 2 - Accomodate for null values
    it('should return the phrase "Hello There!',() =>{
        const name = null;
        expect(greet(name)).toBe("Hello There!");
    });

    //Test 3 - Shout back
    it('should return in all caps if the name is',() =>{
        const name = 'JOSE';
        expect(greet(name)).toBe("HELLO JOSE!");
    });

    //Test 4 - two names
    it('should handle two names in an array as input',() =>{
        const name = ['Jose','Pep'];
        expect(greet(name)).toBe("Hello, Jose, Pep");
    });

    //test 5 - Multiple Names
    it('Should handle an array of more than 2 names',() =>{
        const name = ['Alex','Arsene','Jose','Zidane'];
        expect(greet(name)).toBe("Hello, Alex, Arsene, Jose, Zidane");
    });
});


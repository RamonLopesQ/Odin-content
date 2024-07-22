const helloWorld = require('./helloWorld'); //Importa o código do arquivo helloWorld.js

describe('Hello World',function(){
    test('says "Hello, World!"', function(){
        expect(helloWorld()).toEqual('Hello, World!');
    });
});
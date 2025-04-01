const minhafuncao = (parametrol1, parametrol2) {
    return () => {
        return "promise is hell!"
    };
}

const outrafuncao = minhafuncao ("a", "b");

console.log(outrafuncao());

const funcao2 = (callback) => {
     const var2 = callback(2);

    return var2;
}

const result2 = funcao2((number) => {
 return 2 + number;
});

const result2 = funcao2(constcallback);

console.log (result2);           




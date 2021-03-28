function diffieHelman(privA, privB){
    const publicNumberG = 7n;
    //89 mersenne
    const publicNumberP = (2n**89n)-1n;
    if(privA > publicNumberP || privB > publicNumberP){
        throw Error("Private key cannot be bigger than P number")
    }

    function getPublicKey(priv, p, g){
        return (g**priv)%p
    }
    

    const publicKeyA =  getPublicKey(privA, publicNumberP, publicNumberG)
    const publicKeyB =  getPublicKey(privB, publicNumberP, publicNumberG)

    const secretA = (publicKeyB**privA)%publicNumberP
    const secretB = (publicKeyA**privB)%publicNumberP
    
    console.log(secretB === secretA ? `The secret key to use is: ${secretA}`: `Error`)
}
diffieHelman(2474n,1579n)

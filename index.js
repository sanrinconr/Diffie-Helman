function diffieHelman(privA, privB){
    const publicNumberG = 5;
    const publicNumberP = 23;

    function getPublicKey(priv, p, g){
        return (g**priv)%p
    }
    

    const publicKeyA =  getPublicKey(privA, publicNumberP, publicNumberG)
    const publicKeyB =  getPublicKey(privB, publicNumberP, publicNumberG)


    const secretA = (publicKeyB**privA)%publicNumberP
    const secretB = (publicKeyA**privB)%publicNumberP
    console.log(secretB === secretA ? `The secret key to use is: ${secretA}`: `Error`)
}
diffieHelman(6,21)


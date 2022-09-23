function despuesde2segundos() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resuelto');
        }, 2000);
    });
}
async function asyncCall() {
    console.log('ejecutando');
    const result = await despuesde2segundos();
    console.log(result);
    // expected output: “resuelto”
}

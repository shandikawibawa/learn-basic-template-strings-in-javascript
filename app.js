// String templat, juga dikenal sebagai literal templat, adalah fitur dalam javascript yang memungkinkan Anda membuat string dengan ekspresi tersemat. Mereka menggunakan tanda kutip terbalik ``, bukan tanda kutip tunggal atau ganda. String templat menyediakan cara yang lebih fleksibel dan ringkas untuk menyusun string, terutama jika melibatkan variabel atau ekspresi.

console.log(`${2 + 2 }`);

//=========================================//

const firstName = "Shandika"
const lastName = "WebDev"

console.log("this is some message " + firstName + " " + lastName)
console.log(`My name is: ${firstName} ${lastName}`);

//=========================================//

console.log(`${ ['one', 'two', 'three'] }`);

//=========================================//

function info() {
    return `My name is Shandika webdev & i'm 18 years old`
}

console.log(`${info()}`);

//========================================//

const text = `The quick
brown fox
jumps over
the lazy dog`;

console.log(text);

//========================================//
/* Buat loop yang mencetak angka 1-100,
JIKA kelipatan 3 maka outputnya "Fizz",
JIKA kelipatan 5 outputnya "Buzz", 
dan JIKA kelipatan 3 dan 5 keluarkan 'FizzBuzz'
*/

for (let i = 1; i <= 100; i ++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz")
    } else if (i % 5 === 0) {
        console.log("Buzz")
    } else if(i % 3 === 0) {
        console.log("Fizz")
    } else {
        console.log(i)
    }
}
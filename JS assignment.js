//Program 1
console.log("Program to print even no from 100 to 2")
for(var i=100; i>=2;i--){
    if (i%2==0){
        console.log(i)
    }
}

//Program 2- Largest name of the country
Longest_Country_Name=["Australia", "Germany", "United States of America"]
function Longest_Country_Name(countries) {
    let longestCountry = countries[0];
    for (let country of countries) {
        if (country.length > longestCountry.length) {
            longestCountry = country;
            console.log(countries)
        }
    }
    return longestCountry;
}


//program 3- Reversing number
function reverseNum(n) {
    let r = n.toString().split('').reverse().join('');
    return Math.sign(n) * parseInt(r);
  }
console.log(reverseNum(83343))


//program 4
var a=50
for(var i=2;i<=a;i++){
    if (a%i==0)
    console.log("Not a prime number")
    
    else
    console.log("Prime number")
}



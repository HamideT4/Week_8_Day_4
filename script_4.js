const entrepreneurs = [

    { first: 'Steve', last: 'Jobs', year: 1955 },

    { first: 'Oprah', last: 'Winfrey', year: 1954 },

    { first: 'Bill', last: 'Gates', year: 1955 },

    { first: 'Sheryl', last: 'Sandberg', year: 1969 },

    { first: 'Mark', last: 'Zuckerberg', year: 1984 },

    { first: 'Beyonce', last: 'Knowles', year: 1981 },

    { first: 'Jeff', last: 'Bezos', year: 1964 },

    { first: 'Diane', last: 'Hendricks', year: 1947 },

    { first: 'Elon', last: 'Musk', year: 1971 },

    { first: 'Marissa', last: 'Mayer', year: 1975 },

    { first: 'Walt', last: 'Disney', year: 1901 },

    { first: 'Larry', last: 'Page', year: 1973 },

    { first: 'Jack', last: 'Dorsey', year: 1976 },

    { first: 'Evan', last: 'Spiegel', year: 1990 },

    { first: 'Brian', last: 'Chesky', year: 1981 },

    { first: 'Travis', last: 'Kalanick', year: 1976 },

    { first: 'Marc', last: 'Andreessen', year: 1971 },

    { first: 'Peter', last: 'Thiel', year: 1967 }

  ];

console.log("=========================================================================");

console.log("Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70");

console.log("=========================================================================");

entrepreneurs.forEach(entrepreneursContent => {

    if(entrepreneursContent.year >= 1970 && entrepreneursContent.year < 1980){

        console.log(entrepreneursContent)

    }


});

console.log("=========================================================================");

console.log("Sors une array qui contient le prénom et le nom des entrepreneurs");

console.log("=========================================================================");

let array = []

entrepreneurs.forEach(entrepreneursContent => {

    array.push(entrepreneursContent.first,entrepreneursContent.last)

})

console.log(array)

console.log("=========================================================================");

console.log("Quel âge aurait chaque inventeur aujourd'hui ?");

console.log("=========================================================================");

entrepreneurs.forEach(entrepreneursContent => {

    entrepreneursContent.year = 2023 - entrepreneursContent.year

        console.log(`${entrepreneursContent.first} ${entrepreneursContent.last} : ${entrepreneursContent.year} ans`)
});

console.log("=========================================================================");

console.log("Trie les entrepreneurs par ordre alphabétique du nom de famille.");

console.log("=========================================================================");

entrepreneurs.sort(function(a,b){

    if(a.last < b.last){
        return -1;
    }

    else{
        return 1;
    };
});

entrepreneurs.forEach(entrepreneursContent => {
    
    console.log(`${entrepreneursContent.last} ${entrepreneursContent.first}`);
})
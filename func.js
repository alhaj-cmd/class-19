var dataItem = {
    school:'sirajgonj govt collage',
    class:12,
    subject:'Accounting'
}

//  no 1 declared name

console.log(dataItem.class);

//  no 2 declared name

var dataitem = dataItem["class"];
console.log(dataitem);

//  no 3 declared name

var dataItems ="class";
var data=dataItem[dataItems];

// enumerable

var propertice = Object.keys(dataItem);
console.log(propertice)
var propertice = Object.entries(dataItem);
console.log(propertice)
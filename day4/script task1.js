//challenge 1
//data2
const mohansmass = 78;
const ramsmass = 92;
const mohansheight = 1.69;
const ramsheight = 1.95;
const mohansBMI = mohansmass/mohansheight**2;
const ramsBMI = ramsmass/ramsheight**2;
const mohansBMIisheigherthanramsBMI = mohansBMI > ramsBMI;
console.log(mohansBMI, ramsBMI,);
 console.log(mohansBMIisheigherthanramsBMI);
//data2
const mohanmass = 95;
const rammass = 85;
const mohanheight = 1.88;
const ramheight = 1.76;
const mohanBMI = mohanmass/mohanheight**2;
const ramBMI = rammass/ramheight**2;
const mohanBMIisheigherthanramBMI = mohanBMI > ramBMI;
console.log(mohanBMI, ramBMI,);
 console.log(mohanBMIisheigherthanramBMI);



 //challenge 2
 //task 1
 //for data 1
 let bmi = 0;
const ramsBMIisheigherthanmohansBMI = ramsBMI > mohansBMI;
if (bmi = mohansBMIisheigherthanramsBMI) {
    console.log("Mohan's BMI is heigher than Ram");
}
else if (bmi = ramsBMIisheigherthanmohansBMI){
    console.log("Ram's BMI is heigher than Mohan");
}
else{
    console.log('Sorry! Wrong Data Inserted');
}
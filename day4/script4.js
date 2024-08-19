// let a = 18;
//         if (a === 18) console.log("Bhaskar");

//         console.log(94+30+27-1);
//         // alert("Jai Shri Ram");

//         console.log("You can't tell me nothing");

//         let firstName = "West";
//         console.log(firstName);
//         console.log(firstName);
//         console.log(firstName);

//         let myfirstJob = "student";
//         let mycurrentJob = "student";
//         console.log(myfirstJob);
//         console.log(mycurrentJob);






        // let bool = false;
        // console.log(bool);
        // let str = "right";
        // console.log(str);
        // let num = 18;
        // console.log(num)
        // console.log(typeof false);
        // console.log(typeof bool);
        // console.log(typeof str);
        // console.log(typeof num);

        // let year;
        // console.log(year);
        // console.log(typeof year);

        // year = 2014;
        // console.log(typeof year);

        // console.log(typeof null);
        
        // let age = 18;
        // age = 19;
        // const birthYear = 2014;
        // // birthYear = 2023;
        // // const job;
        // const job = 'teacher';







        // topic=maths operators

        // // const now = 2024
        // // const ramsAge = now - 2005;
        // // const ramAge = now - 2024;
        // // console.log(ramsAge);
        // // console.log(ramAge);

        // let now = 2024
        // const ramsAge = now - 2006;
        // const ramAge = now - 2024;
        // console.log(ramsAge);
        // console.log(ramAge);
        // console.log(ramsAge,ramAge);
        // console.log(ramsAge * 2, ramAge/0, 3*3, 3**3, 3**8);

        //  //concat()

        //  const firstName = 'Virat';
        //  const lastName = 'Kohli';
        // console.log(firstName + ' ' + lastName);

        // // topic=assignment operators 
        // let x = 6 + 11;
        // // x = x + 6;
        // x += 6;
        // x *=3//x = x * 3 = 69
        // x++;//x=x+1
        // x--;//x=x-1
        // console.log(x);

        // //topic=comparison operators
        // console.log(ramAge > ramsAge);
        // console.log(ramsAge>18);
        // console.log(ramsAge>=18);
        // const isfullAge = ramsAge>=18;

        // const how = 2023;
        // const calmsAge = now-1983;
        // const calmAge = now-2011;
        // console.log(now-1983>now-2011);

        // let s,m;
        // s=m=5-4-3;
        // console.log(s,m);

        // console.log(calmsAge,calmAge);
        // const averageAge=(calmsAge+calmAge)/2;
        // console.log(averageAge);







        const firstName = 'Sooraj';
        const lastName = 'Cherukat';
        const job = 'rapper';
        const birthYear = 1992;
        const year =2024;
        const Hanumankind = "I'm"+' '+firstName+lastName+', a'+' '+(year-birthYear)+' '+'year old'+' '+job+' '+'!';
        console.log(Hanumankind);
        //template literal
        const hanumankind = `I'm ${firstName} ${lastName}, a ${year-birthYear} year old ${job} !`;
        console.log(hanumankind);
        
        console.log('starting with\n\
        multiple\n\
                line');
        console.log(`starting with
                multiple
        lines`);

        // const age = 1
        // if (age>=18) {
        //        console.log('You can drive now!, just rock it '); 
        // } 
        const age = 15;
        if (age>=18) {
               console.log('You can drive now!, just rock it🏎️'); 
        }
        else{
              const leftYears = 18 - age;
                console.log(`its not the right time, get your license now🪪. ${leftYears} years left`); 
        }

        const birthsYear=2019;
        let century = 2000;
        if (birthsYear<=2000) {
                century=20
        } else {
                century=21
        }
        console.log(century);
        
        //type conversion
        const inputYear = '2007';
        console.log(inputYear + 4);
        console.log(Number(inputYear)+4);
        console.log(Number(inputYear), inputYear);

        console.log(String(11), 11);
        
        //type coercion
        console.log('I am' +' ' + 18 +' ' + 'years old');
        console.log('77'-'1'-1);
        console.log('3'/'98');


        let n='1'+1;
        console.log(n);

        let b='1'+1;
        b=b-1
        console.log(b);
        
        let s = 2+3+4+'5';
        console.log(s);

        let j = '10'-'4'-'3'-2+'5';
        console.log(j);
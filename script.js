//Question-1
let meter=213;
if (meter%2==0){
    console.log('Even Reading'+','+'Use discount code:EVENPOWER10')
}
else{
    console.log('Odd Reading'+','+'Use discount code:ODDSAVER10')
}

//Question-2
var celsius=35;
c_to_f=(celsius*9/5)+32;
console.log('The temperature in fahrenheit is',c_to_f);

//Question-3
const order_number=15;
if (order_number%5==0 && order_number%3==0){
    console.log('Free shipping and Cashback');
}
else{
    if (order_number%3==0){
        console.log('Cashback');
    }
    else{
        if(order_number%5==0){
            console.log('Free Shipping')
        }
    }
}

//Question-4
let time = 12;
            let period = 'PM';
            if ((period === 'AM') && (time >= 6 && time < 12)) {
                console.log('GOOD MORNING')
            }
            else {
                if ((period === 'PM') && (time == 12 || (time >= 0 && time < 5))) {
                    console.log('GOOD AFTERNOON');
                } else {
                    if ((period === 'PM') && (time > 5 && time < 9)) {
                        console.log('GOOD EVENING');
                    }
                    else {
                        if ((period === 'PM') && (time >= 9 && time < 12)) {
                            console.log('GOOD NIGHT');
                        } else {
                            if ((period === 'AM') && (time >= 0 && time < 6)) {
                                console.log('GOOD NIGHT');
                            }
                            else {
                                console.log('ENTER THE TIME IN 12 Hours FORMAT')
                            }
                        }
                    }
                }
            }

//Question-5
var num=5
if(num%3==0 && num%5==0){
    console.log('Handled by special Team')
}
else{
    if(num%5==0){
        console.log('Handled by Team B')
    }
    else{
        if(num%3==0){
            console.log('Handled by Team A')
        }
        else{
            console.log('No team assigned')
        }
    }
}

//Question-6
var speed=70;
if(speed<60){
    console.log('Normal Speed')
}
else{
    if(speed>60 && speed<80){
        console.log('Warning: Close to Overspeeding')
    }
    else{
        if(speed>80){
            console.log('Overspeeding! Penalty applied')
        }
        else{
            console.log('Speed Exceeded')
        }
    }
}

//Question-7
var score=85
if(score>90){
    console.log('Grade:A+')
}
else{
    if(score>80 && score<89){
        console.log('Grade A')
    }
    else{
        if(score>70 && score<79){
            console.log('Grade B')
        }
        else{
            if(score>60 && score<69){
                console.log('Grade C')
            }
            else{
                if(score<60){
                    console.log('Grade F')
                }
            }
        }
    }
}

//Question-8
var balance=2000
var withdrawal=2500
if(withdrawal>balance){
    console.log('Insufficient Funds')
}
else{
    console.log('Transaction successful')
    console.log(`Amount withdrawn is ${balance-withdrawal}`)

}

//Question-9
var purchase_amount=1200
if(purchase_amount>1000){
    console.log(`Amount discounted ${purchase_amount-(purchase_amount*20)/100}`)
}
else{
    if(purchase_amount>500 && purchase_amount<1000){
        console.log(`Amount discounted is ${purchase_amount-(purchase_amount*10)/100}`)
    }
    else{
        if(purchase_amount<500){
            console.log('No discount')
        }
        else{
            console.log('Purchase amount should be greater')
        }
    }
}

//Question-10
var age=65
if(age<12){
    console.log('Ticket Price:$5')
}
else{
    if(age>12 && age<60){
        console.log('Ticket Price:$10')
    }
    else{
        if(age>60){
            console.log('Ticket Price:$7')
        }
    }
}
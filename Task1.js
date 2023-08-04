

function grade(mark){   //using mark as a argument
    if (mark < 50 ){        //using if function to calculate grades, switch case could also have been used 
        console.log('F')
    }
    else if (mark >= 50 && mark < 60){
        console.log('E')
    }
    else if (mark >= 60 && mark < 70){
        console.log('D')
    }
    else if (mark >= 70 && mark < 80){
        console.log('C')
    }
    else if (mark >= 80 && mark < 90){
        console.log('B')
    }
    else {
        console.log('A')
    }
    
}

grade(60);  //runnign the function by passing the score as ann argument

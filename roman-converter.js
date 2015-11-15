function convertToRoman(num){
    
    //We are bulding arrays that will store the roman numbers.
    var basicNumbers = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
    var tens = ["X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    var hundreds = ["C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    var thousands = ["M", "MM", "MMM", "MMMM", "MMMMM"];
    
    var romanBasic, romanTens, romanHundreds, romanThousands;
    var answer;
    //We are converting the number to string in order to split it into its basic parts
    //We want to know the 1000's 100's 10's and the basic 0-9;
    var numberSplit = num.toString();
    
    if(num === 0){
        //There is no 0 in romanNumerals so we use the word nulla for a single zero
        answer = 'nulla';
    } else if(num < 10){
        //We look at the first position and then take the roman symbol according to the basic
        //Numbers array
        romanBasic = basicNumbers[Number(numberSplit.charAt(0)) - 1];
        answer = romanBasic;
    } else if (num < 100){
        //Same as above except our position for the romanBasic has changed by one
        romanBasic = basicNumbers[Number(numberSplit.charAt(1)) - 1];
        romanTens = tens[Number(numberSplit.charAt(0)) - 1];
        //The first use of an if condition
        //We are checking to see if the character a position 1 exists
        //If it doesn't we simply return the symbol from the tens array
        //If it exists we are combining the tens and the basicNumber
        romanBasic ? answer = romanTens + romanBasic : answer = romanTens;
        
        
    } else if (num < 1000){
        romanBasic = basicNumbers[Number(numberSplit.charAt(2)) - 1];
        romanTens = tens[Number(numberSplit.charAt(1)) - 1];
        romanHundreds = hundreds[Number(numberSplit.charAt(0)) - 1];
        
        romanBasic && !romanTens ? answer = romanHundreds + romanBasic :
        romanTens && !romanBasic ? answer = romanHundreds + romanTens :
        romanTens && romanBasic ? answer = romanHundreds + romanTens + romanBasic :
        answer = romanHundreds;
         
    } else if (num < 5000){
        romanBasic = basicNumbers[Number(numberSplit.charAt(3)) - 1];
        romanTens = tens[Number(numberSplit.charAt(2)) - 1];
        romanHundreds = hundreds[Number(numberSplit.charAt(1)) - 1];
        romanThousands = thousands[Number(numberSplit.charAt(0)) - 1];
        
        //This was explained above.
        //Here we have to account for many possible outcomes.
        romanBasic && romanHundreds && romanTens ?
        answer = romanThousands + romanHundreds + romanTens + romanBasic :
        romanBasic && romanHundreds && !romanTens ?
        answer = romanThousands + romanHundreds + romanBasic :
        romanBasic && !romanHundreds && romanTens ?
        answer = romanThousands + romanTens + romanBasic :
        romanBasic && !romanHundreds && !romanTens ?
        answer = romanThousands + romanBasic :
        !romanBasic && romanHundreds && romanTens ?
        answer = romanThousands + romanHundreds + romanTens :
        !romanBasic && romanHundreds && !romanTens ?
        answer = romanThousands + romanHundreds :
        !romanBasic && !romanHundreds && romanTens ?
        answer = romanThousands + romanTens :
        answer = romanThousands;
        
    }

   return answer;
}

convertToRoman(3020);



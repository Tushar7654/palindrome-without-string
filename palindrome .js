/* my way of approaching the question
i will make a function which will take the input as x then i assign a value to x and for neglecting negative
cases i used {if (x<0) return false} then i used for loop and took another variable i which is in this case
the reverse of x. */

/*example (not palindrome):
          if i take 123 the reverse of 123 is  321 
          in this case i used the for loop to convert 123  to 321  by using math.floor and % by mentioning i/10 gives us 12.3
          because of % we can extract the last digit of the no. in this case which is 3 and then multiply it with 10 which gives 30 then it adds 2 to it which sums up to 32
          then in the second run of the loop 32 x 10 will give 320 and % from 0.1 will give us the digit 1 which will then add to 320 making it 321. */




function isPalindrome(x) {
    if (x<0) return false;
    let reverse = 0;
    for (let i=x; i>=1; i=Math.floor(i/10)) reverse = reverse*10 + i%10;
    return reverse === x;
}

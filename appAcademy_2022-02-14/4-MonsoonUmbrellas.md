# 4. MONSOON UMBRELLAS

Find the number of umbrellas Mr. Anderson must purchase to cover his entire group.

Umbrellas are available in different sizes that are each able to shelter a certain number of people. Given the number of people needing shelter and a list of umbrella sizes, determine the minimum number of umbrellas necessary to cover exactly the number of people given and no more. If there is no combination of umbrellas of the same or different sizes that covers exactly that number of people, return *-1*.

## Example 0

*requirement = 5*  
*sizes = [3, 5]*  
One umbrella can cover exactly *5* people, so the function should return *1*.  

## Example 1

*requirement = 8*  
*sizes = [3, 5]*  
It is possible to use *1* umbrella of size *3* and *1* umbrella of size *5* to cover exactly *8* people, so the function should return *2*.  

## Example 2

*requirement = 7*  
*sizes = [3, 5]*  
There is no combination of umbrellas that cover exactly *7* people, so the function should return *-1*.  

## Function Description

Complete the function *getUmbrellas* in the editor below.

*getUmbrellas* has the following parameter(s):

- *int* *requirement*:  the number of people to shelter
- *int* *sizes[n]*:  an array of umbrella sizes available

## Returns

- *int*: the minimum number of umbrellas required to cover exactly requirement people, or *-1* if it is impossible

## Constraints

- *1 ≤ requirement, m, sizes[i] ≤ 1000*

## Input Format for Custom Testing

Input from stdin will be processed as follows and passed to the function.

The first line contains an integer, *requirement*.  
The next line contains an integer *m*, the size of the array *sizes*.  
Each of the next *m* lines contains an integer *sizes[i]* where *0 ≤ i < m*.  

## Sample Case 0

### Sample Input 0

    STDIN      Function

    -----      --------

    4      →   requirement = 4

    2      →   sizes[] size n = 2

    2      →   sizes = [2, 4]

    4      

### Sample Output 0

    1

### Explanation 0

The first size of umbrella can cover *sizes[0] = 2* people, and the second can cover *sizes[1] = 4* people. To cover exactly *requirement = 4* people, use either *2* umbrellas of type *sizes[0]* or *1* umbrella of type *sizes[1]*. The minimal number is *1*.

## Sample Case 1

### Sample Input 1

    STDIN      Function 

    -----      -------- 

    1      →   requirement = 1

    1      →   sizes[] size n = 1

    2      →   sizes = [2]

### Sample Output 1

    -1

### Explanation 1

There is *requirement = 1* person to cover and *n = 1* umbrella size that covers *sizes[0] = 2* people. Because there is no way to protect exactly one person, the returned value is *-1*.

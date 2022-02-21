# 1. NUMBER OF CHARACTERS ESCAPED

Given a string that consists of lowercase English letters and the characters '#' (ASCII value 35) and '!' (ASCII value 33), determine the number of times a character will be escaped. A character will be escaped if:

- It is a lowercase English letter, and
- There is a '!' character immediately before it, and
- Both the lowercase English letter and the '!' character are between a starting and an ending '#' character

## Example

*expression = '#ab!c#de!f'*  
The string is escaped once at *'!c'*. The substring *'!f'* is not between *'#'* characters so it is not escaped. Return *1*.

## Function Description

Complete the *numberOfCharactersEscaped* function in the editor below.

*numberOfCharactersEscaped* has the following parameter(s):

- *expression*: a string to evaluate

## Returns

- *int*: the number of characters that are escaped

## Constraints

- 1 ≤ length of expression ≤ 105
- The # characters will not be nested
- Every opening # character will have a closing # character

## Input Format For Custom Testing

Input from stdin will be processed as follows and passed to the function:

The first and only line of input contains a string, expression, the string to evaluate.

## Sample Case 0

### Sample Input 0

    STDIN      Function

    -----      -----

    ##!r#po# → expression = '##!r#po#'

### Sample Output 0

    0

### Explanation 0

The string '##!r#po#' has 8 characters.

- The 4th character is a lowercase English letter *'r'*.
- Although there is a *'!'* character before this *'r'*, they are not between starting and ending *'#'* characters, so *r* is not escaped.

The number of times characters are escaped is *0*.

## Sample Case 1

### Sample Input 1

    STDIN     Function

    -----     -----

    #a!b#c →  expression = '#a!b#c'

### Sample Output 1

    1

### Explanation 1

The string *'#a!b#c'* has 6 characters.

- The 4th character is a lowercase English letter *'b'*. Since there is a *'!'* character before the *'b'* character and both are between a starting and ending *'#'*, the *'b'* character will be escaped.

The number of times characters escaped is *1*.

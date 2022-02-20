# 2. BINARY NUMBER IN A LINKED LIST

Convert a linked list of binary integers to a binary number and find its decimal representation.

A binary number is represented as a series of *0*'s and *1*'s. In this challenge, the series will be in the form of a singly-linked list. Each node instance, a *LinkedListNode*, has a value, *data*, and a pointer to the next node, *next*. Given a reference to the head of a singly-linked list, convert the binary number represented to a decimal number.

## Example

Linked list corresponding to the binary number *(010011)[2]* or *(19)[10]*.  

## Function Description

Complete the function *getNumber* in the editor below.

*getNumber* has the following parameter(s):

- *binary*:  reference to the head of a singly-linked list of binary digits

## Returns

- *int*: a (long integer)[10] representation of the binary number

## Constraints

- *1 ≤ n ≤ 64*
- All *LinkedListNode.data ∈ {01}*
- The described *(integer)[2] < 264*

## Input Format for Custom Testing

Input from stdin will be processed as follows and passed to the function.

The first line contains an integer *n*, the size of the linked list *binary*.

Each of the next *n* lines contains an integer *LinkedListNode.data[i]* where *0 ≤ i < n*.

## Sample Case 0

### Sample Input 0

    STDIN    Function

    -----    -----

    7     →  binary[] size n = 7

    0     →  binary LinkedListNode.data = [0, 0, 1, 1, 0, 1, 0]

    0                                      

    1                                      

    1                                      

    0                                      

    1                                      

    0                                       

### Sample Output 0

    26

### Explanation 0

The linked list is given as input. 

The linked list forms the binary number *0011010 → (0011010)[2] = (26)[10]*

## Sample Case 1

### Sample Input 1

    STDIN    Function

    -----    -----

    10    →  binary[] size n = 10

    0     →  binary LinkedListNode.data = [0, 0, 0, 0, 0, 1, 1, 1, 1, 1]

    0                                      

    0                                      

    0                                      

    0                                      

    1                                      

    1                                      

    1                                      

    1                                      

    1                                      

### Sample Output 1

    31

### Explanation 1

The linked list given as input. 

The linked list forms the binary number *0000011111 → (0000011111)[2] = (31)[10]*

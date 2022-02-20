# -*- coding: utf-8 -*-
'''
Created on Sun Feb 20 2022

@author: Carlos Páez
'''

#
# Complete the `aVeryBigSum` function below
# The function is expected to return a LONG_INTEGER
# The function accepts LONG_INTEGER_ARRAY ar as parameter
#

def aVeryBigSum(n, ar):
    """
    Given an array of integers, add up all the numbers
    
    :param n: an integer, the number of elements in our array
    :param ar: an array of integers that will always contain 5 elements
    :return: The sum of all the elements in the array.
    """
    sum = 0
    if 1 <= n <= 10:
        for i in range(n):
            sum += ar[i] if ar[i] <= 10 ** 10 else 0
    return sum


if __name__ == '__main__':
    fptr = open('./output.txt', 'w')

    ar_count = int(input().strip())

    ar = list(map(int, input().rstrip().split()))

    result = aVeryBigSum(ar_count, ar)

    fptr.write(str(result) + '\n')

    fptr.close()
# -*- coding: utf-8 -*-
'''
Created on Sat Feb 19 2022

@author: Carlos Páez
'''
import os

#
# Complete the `simpleArraySum` function below. 
#
# The function is expected to return an INTEGER
# The function accepts INTEGER_ARRAY ar as parameter
#

def simpleArraySum(ar):
    """
    Given an array of integers, add up all the numbers
    
    :param ar: an array of integers
    :return: The sum of the array.
    """
    sum = 0
    for i in range(len(ar)):
        # if (ar[i] <= 1000):
        #     sum += ar[i]
        # else:
        #     return '0 < n, ar[i] <= 1000'
        sum += ar[i] if ar[i] <= 1000 else 0
    return sum


if __name__ == '__main__':
    os.environ['OUTPUT_PATH'] = './output.txt'
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    # ar_count = int(input().strip())

    ar = list(map(int, input().rstrip().split()))

    result = simpleArraySum(ar)

    fptr.write(str(result) + '\n')

    fptr.close()
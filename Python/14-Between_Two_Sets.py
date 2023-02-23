# -*- coding: utf-8 -*-
""" 
Created on Thu Feb 23 2023

@author Carlos Páez
"""
from math import gcd
from functools import reduce


#
# Complete the 'getTotalX' function below.
#
# The function is expected to return an INTEGER.
# The function accepts following parameters:
#  1. INTEGER_ARRAY a
#  2. INTEGER_ARRAY b
#

def getTotalX(a, b):
    """
    It returns the number of integers between the least common multiple of the first array and the
    greatest common divisor of the second array that are divisible by the least common multiple of the
    first array

    :param a: an array of integers
    :param b: [2, 4]
    :return: The number of integers that are between two arrays.
    """
    if not (1 <= len(a) <= 10) or not (1 <= len(b) <= 10):
        return 0

    for arr in [a, b]:
        if not all(1 <= num <= 100 for num in arr):
            return 0

    lest_common_multiple_a = reduce(lambda x, y: x * y // gcd(x, y), a)

    greatest_common_divisor_b = reduce(gcd, b)

    return sum(
        1 for x in range(lest_common_multiple_a, greatest_common_divisor_b + 1, lest_common_multiple_a)
        if greatest_common_divisor_b % x == 0
    )


if __name__ == '__main__':
    fptr = open('./output.txt', 'w')

    first_multiple_input = input().rstrip().split()

    n = int(first_multiple_input[0])
    m = int(first_multiple_input[1])

    arr = list(map(int, input().rstrip().split()))
    brr = list(map(int, input().rstrip().split()))

    total = getTotalX(arr, brr)

    fptr.write(str(total) + '\n')

    fptr.close()

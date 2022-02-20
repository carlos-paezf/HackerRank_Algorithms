# -*- coding: utf-8 -*-
'''
Created on Sat Feb 19 2022

@author: Carlos Páez
'''
#
# Complete the `compareTriplets function below`
# The function is expected to return an INTEGER_ARRAY.
# The function accepts following parameters:
#   1. INTEGER_ARRAY a
#   2. INTEGER_ARRAY b
#

def compareTriplets(a, b):
    """
    Compare the elements of two lists and return the number of times the first list is larger than the
    second
    
    :param a: list of integers representing Alice's challenge rating
    :param b: an array of integers representing Bob's challenge rating
    :return: A list of two integers.
    """
    points = [0, 0]
    for i, j in zip(a, b):
        if i > j and (1 <= i <= 100 and 1 <= j <= 100):
            points[0] += 1
        elif i < j and (1 <= i <= 100 and 1 <= j <= 100):
            points[1] += 1
    return points


if __name__ == '__main__':
    fptr = open('./output.txt', 'w')

    a = list(map(int, input().rstrip().split()))

    b = list(map(int, input().rstrip().split()))

    result = compareTriplets(a, b)

    fptr.write(' '.join(map(str, result)))
    fptr.write('\n')

    fptr.close()
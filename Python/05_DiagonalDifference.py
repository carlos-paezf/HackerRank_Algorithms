# -*- coding: utf-8 -*-
'''
Created on Mon Feb 21 2022

@author: Carlos Páez
'''

#
# Complete the `diagonalDifference` function below
#
# The function is expected to return a INTEGER
# The function accepts 2D_INTEGER_ARRAY ar as parameter
#

def diagonalDifference(arr):    
    """
    Given a square matrix, calculate the absolute difference between the sums of its diagonals
    
    :param arr: an array of integers
    :return: The absolute value of the difference between the sum of the diagonals.
    """
    left_to_right = 0
    right_to_left = 0

    x, y = 0, len(arr) - 1

    for i in range(len(arr)):
        left_to_right += arr[i][x] if -100 <= arr[i][x] <= 100 else 0
        right_to_left += arr[i][y] if -100 <= arr[i][y] <= 100 else 0
        x += 1
        y -= 1

    return abs(left_to_right - right_to_left)


if __name__ == '__main__':
    fptr = open('./output.txt', 'w')

    n = int(input().strip())

    arr = []

    for _ in range(n):
        arr.append(list(map(int, input().rstrip().split())))

    result = diagonalDifference(arr)

    fptr.write(str(result) + '\n')
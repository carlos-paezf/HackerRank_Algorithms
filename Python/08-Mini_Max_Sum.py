# -*- coding: utf-8 -*-
'''
Created on Tue Mar 01 2022

@author: Carlos Páez
'''

# 
# Complete the `miniMaxSum` function below
# 
# The function accepts INTEGER_ARRAY ass as parameter
# 

def miniMaxSum(arr):
    """
    Given an array of integers, find the minimum and maximum values that can be calculated by summing
    exactly four of the five integers. 
    Then print the respective minimum and maximum values as a single line of two space-separated long
    integers
    
    :param arr: an array of 5 integers
    """
    arr_sort = sorted(arr)
    mini, max = 0, 0
    i, j = 0, len(arr) - 1 

    if len(arr) > 5: pass

    for _ in range(len(arr) - 1):
        mini += arr_sort[i]
        max += arr_sort[j]
        i += 1
        j -= 1
    
    print(mini, max)


if __name__ == '__main__':
    arr = list(map(int, input().rstrip().split()))

    miniMaxSum(arr)
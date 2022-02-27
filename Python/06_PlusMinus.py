# -*- coding: utf-8 -*-
'''
Created on Sun Feb 27 2022

@author: Carlos Páez
'''

#
# Complete the `plusMinus` function below
#
# The function accepts INTEGER_ARRAY arr as parameter
#

def plusMinus(n, arr):
    pos, neg, zero = 0, 0, 0
    if 0 < n <= 100:
        for i in range(n):
            if -100 <= arr[i] <= 100:
                pos += 1 if arr[i] > 0 else 0
                neg += 1 if arr[i] < 0 else 0
                zero += 1 if arr[i] == 0 else 0
    ratio_pos, ratio_neg, ratio_zero = pos/n, neg/n, zero/n
    print("{0:.6f}".format(ratio_pos))
    print("{0:.6f}".format(ratio_neg))
    print("{0:.6f}".format(ratio_zero))


if __name__ == '__main__':
    n = int(input().strip())

    arr = list(map(int, input().rstrip().split()))

    plusMinus(n, arr)
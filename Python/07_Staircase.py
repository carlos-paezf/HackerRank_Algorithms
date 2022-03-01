# -*- coding: utf-8 -*-
'''
Created on Tue Mar 01 2022

@author: Carlos Páez
'''

#
# Complete the `staircase` function below.
# 
# The function accepts INTEGER n as parameter
# 

def staircase(n):
    """
    Print a staircase of n steps
    
    :param n: the number of steps in the staircase
    """
    space = n - 1
    symbol = 1

    if 0 < n <= 100:
        for _ in range(n):
            print(' ' * space + '#' * symbol)
            space -= 1
            symbol += 1


if __name__ == '__main__':
    n = int(input().strip())

    staircase(n)
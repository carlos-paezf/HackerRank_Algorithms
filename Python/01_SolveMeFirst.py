# -*- coding: utf-8 -*-
'''
Created on Fri Feb 18 2022

@author: Carlos Páez
'''


def solveMeFirst(a, b):
    """
    Given two integers, return their sum
    
    :param a: the first number
    :param b: the second number
    :return: The sum of the two numbers.
    """
    if 1 <= a and b <= 1000:
        return a + b
    return '1 <= a, b <= 1000'


num1 = int(input())
num2 = int(input())

res = solveMeFirst(num1, num2)
print(res)

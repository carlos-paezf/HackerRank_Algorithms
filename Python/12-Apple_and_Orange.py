# -*- coding: utf-8 -*-
""" 
Created on Tue Feb 21 2023

@author Carlos Páez
"""
import math

#
# Complete the `countApplesAndOranges` function below.
#
# The function accepts following parameters:
#   1. INTEGER s
#   2. INTEGER t
#   3. INTEGER a
#   4. INTEGER b
#   5. INTEGER_ARRAY apples
#   6. INTEGER_ARRAY oranges
#


def countApplesAndOranges(s: int, t: int, a: int, b: int, apples: list[int], oranges: list[int]):
    """
    It takes in a bunch of numbers, checks if they're valid, and then prints out the number of valid
    apples and oranges.

    :param s: starting point of Sam's house location
    :type s: int
    :param t: integer, the point where the house ends
    :type t: int
    :param a: starting point of Sam's house location
    :type a: int
    :param b: the location of the tree from which the oranges are thrown
    :type b: int
    :param apples: an array of integers representing the distances that each apple falls from point a
    :type apples: list[int]
    :param oranges: list[int]
    :type oranges: list[int]
    :return: The number of apples and oranges that fall on Sam's house.
    """
    if not all(1 <= param <= 10**5 for param in (s, t, a, b)):
        return 'Error'

    valid_apples = [
        apple for apple in apples
        if -10 ** 5 <= apple <= 10**5 and s <= apple + a <= t
    ]
    valid_oranges = [
        orange for orange in oranges
        if - 10**5 <= orange <= 10**5 and s <= orange + b <= t
    ]

    print(len(valid_apples))
    print(len(valid_oranges))


if __name__ == '__main__':
    first_multiple_input = input().rstrip().split()

    s = int(first_multiple_input[0])
    t = int(first_multiple_input[1])

    second_multiple_input = input().rstrip().split()

    a = int(second_multiple_input[0])
    b = int(second_multiple_input[1])

    third_multiple_input = input().rstrip().split()

    m = int(third_multiple_input[0])
    n = int(third_multiple_input[1])

    apples = list(map(int, input().rstrip().split()))
    oranges = list(map(int, input().rstrip().split()))

    countApplesAndOranges(s, t, a, b, apples, oranges)

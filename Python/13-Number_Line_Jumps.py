# -*- coding: utf-8 -*-
""" 
Created on Tue Feb 21 2023

@author Carlos Páez
"""

#
# Complete the 'kangaroo' function below.
#
# The function is expected to return a STRING.
# The function accepts following parameters:
#  1. INTEGER x1
#  2. INTEGER v1
#  3. INTEGER x2
#  4. INTEGER v2
#


def kangaroo(x1, v1, x2, v2) -> str:
    """
    If the kangaroos are not moving at the same speed, and the distance between them is a multiple
    of the difference in their speeds, then they will meet. 

    :param x1: starting position for kangaroo 1
    :param v1: Kangaroo 1's jump distance
    :param x2: starting position of kangaroo 2
    :param v2: the speed of the second kangaroo
    :return: a string.
    """
    max_limit = 10000
    if not (0 <= x1 < x2 <= max_limit) or not (1 <= v1 <= max_limit) or not (1 <= v2 <= max_limit):
        return 'NO'
    if x1 < x2 and v1 < v2:
        return 'NO'
    else:
        return 'YES' if v1 != v2 and (x2 - x1) % (v2 - v1) == 0 else 'NO'


if __name__ == '__main__':
    fptr = open('./output.txt', 'w')

    first_multiple_input = input().rstrip().split()

    x1 = int(first_multiple_input[0])
    v1 = int(first_multiple_input[1])
    x2 = int(first_multiple_input[2])
    v2 = int(first_multiple_input[3])

    result = kangaroo(x1, v1, x2, v2)

    fptr.write(result + '\n')

    fptr.close()

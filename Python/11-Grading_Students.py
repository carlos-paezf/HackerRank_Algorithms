# -*- coding: utf-8 -*-
""" 
Created on Mon Feb 20 2023

@author Carlos Páez
"""
import random
import sys
import math

#
# Complete the 'gradingStudents' function below.
#
# The function is expected to return an INTEGER_ARRAY.
# The function accepts INTEGER_ARRAY grades as parameter.
#


def _round_up_to_next_multiple_of_5(x: int) -> int:
    """
    It takes a number, divides it by 5, rounds it up, and then multiplies it by 5

    :param x: the number to round
    :return: the value of 5 times the ceiling of x divided by 5.
    """
    return 5 * math.ceil(x/5)


def gradingStudents(grades: list[int]) -> list[int]:
    """
    If the grade is less than 38, return the grade. If the grade is greater than or equal to 38, round
    up to the next multiple of 5 and return that if the difference between the grade and the next
    multiple of 5 is less than 3. Otherwise, return the grade

    :param grades: an array of integers representing grades before rounding
    :return: a list of rounded grades.
    """
    return [
        _round_up_to_next_multiple_of_5(grade) if grade >= 38 and _round_up_to_next_multiple_of_5(grade) - grade < 3
        else grade
        for grade in grades
    ]


if __name__ == '__main__':
    fptr = open('./output.txt', 'w')

    grades_count = int(input().strip())

    grades = []

    for _ in range(grades_count):
        grades_item = int(input().strip())
        grades.append(grades_item)

    result = gradingStudents(grades)

    fptr.write('\n'.join(map(str, result)))
    fptr.write('\n')

    fptr.close()

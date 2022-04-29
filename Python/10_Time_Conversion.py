# -*- coding: utf-8 -*-
""" 
Created on Fri Apr 29 2022

@author Carlos Páez
"""

#
# Complete the 'timeConversion' function below.
#
# The function is expected to return a STRING.
# The function accepts STRING s as parameter.
#

def timeConversion(s):
    """
    If it's AM, return the string as is unless it's 12, in which case return 00 + the rest of the
    string. If it's PM, return the string as is unless it's 12, in which case return the string as is.
        
    :param s: a string representing time in 12 hour format
    :return: The time in 24 hour format.
    """
    if s[-2:] == "AM":
        if s[:2] == "12":
            return "00" + s[2:-2]
        else:
            return s[:-2]
    else:
        if s[:2] == "12":
            return s[:-2]
        else:
            return str(int(s[:2]) + 12) + s[2:-2]


# It's a way to run the code in the terminal.
if __name__ == '__main__':
    fptr = open('./output.txt', 'w')

    s = input()

    result = timeConversion(s)

    fptr.write(result + '\n')

    fptr.close()
# -*- coding: utf-8 -*-
'''
Created on Mon Apr 18 2022

@author: Carlos Páez
'''

#
# Complete the `birthdayCakeCandles` function below.
#
# The function is expected to return an INTEGER.
# The function accepts INTEGER_ARRAY candles as parameter.
#

def birthdayCakeCandles(candles):
    """
    It returns the number of times the maximum value in the list occurs
    
    :param candles: an array of integers representing candle heights
    :return: The number of candles that are the tallest.
    """
    max_candles = max(candles)
    return candles.count(max_candles)


# The code that is executed when the file is run as a script.
if __name__ == '__main__':
    fptr = open('./output.txt', 'w')

    candles_count = int(input().strip())

    candles = list(map(int, input().rstrip().split()))

    result = birthdayCakeCandles(candles)

    fptr.write(str(result) + '\n')

    fptr.close()
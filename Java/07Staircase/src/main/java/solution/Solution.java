package solution;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

/**
 * Created on Tue Mar 01 2022
 * 
 * @author Carlos Páez
 */
class Result {
    /**
     * Prints a staircase of n steps
     * 
     * @param n The number of rows to print.
     */
    public static void staircase(int n) {
        int spaces = n - 1, symbols = 1;

        if (0 < n && n <= 100) {
            for (int i = 0; i < n; i++) {
                System.out.println(" ".repeat(spaces) + "#".repeat(symbols));
                spaces -= 1;
                symbols += 1;
            }
        }
    }
}


public class Solution {
    /**
     * Prints a staircase of size n
     */
    public static void main(String[] args) throws IOException {
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));

        int n = Integer.parseInt(bufferedReader.readLine().trim());

        Result.staircase(n);

        bufferedReader.close();
    }
}

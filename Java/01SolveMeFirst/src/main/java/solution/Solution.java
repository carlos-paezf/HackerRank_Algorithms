package solution;

import java.util.*;


/**
 * Created on Fri Feb 18 2022
 * @author Carlos Páez
 */
public class Solution {

    private static Scanner _input;

    
    /**
     * It adds two numbers
     * @param a - The first number
     * @param b - The second number
     * @return The sum of the two numbers
     */
    public static int solveMeFirst(int a, int b) {
        if (1 <= a && b <= 1000) {
            return a + b;
        }
        return 0;
    }

    /**
     * Given two integers, return their sum
     */
    public static void main(String[] args) {
        _input = new Scanner(System.in);
        int a = _input.nextInt();
        int b = _input.nextInt();

        int sum = solveMeFirst(a, b);

        System.out.println(sum);
    }
}

package solution;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.List;
import java.util.stream.Stream;
import static java.util.stream.Collectors.toList;

/**
 * Created on Mon Feb 21 2022
 * @author Carlos Páez
 */
class Result {
    /**
     * Given an array of integers, find the sum of its elements
     * 
     * @param n an integer, the number of elements in our array.
     * @param ar an array of integers that represent the elements of the array.
     * @return The sum of all the elements in the array.
     */
    public static long aVeryBigSum(int n, List<Long> ar) {
        long sum = 0;
        if (1<= n && n <= 10) {
            for (int i = 0; i < n; i++) {
                sum += (0 <= ar.get(i) && ar.get(i) <= Math.pow(10, 10)) ? ar.get(i) : 0;
            }
        }
        return sum;
    }
}


public class Solution {
    /**
     * Given an array of integers, find the sum of all the elements in the array
     */
    public static void main(String[] args) throws IOException {
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter("./output.txt"));

        int arCount = Integer.parseInt(bufferedReader.readLine().trim());

        List<Long> ar = Stream.of(bufferedReader.readLine().replaceAll("\\s+$", "").split(" "))
            .map(Long::parseLong)
            .collect(toList());

        long result = Result.aVeryBigSum(arCount, ar);

        bufferedWriter.write(String.valueOf(result));
        bufferedWriter.newLine();

        bufferedReader.close();
        bufferedWriter.close();
    }
}

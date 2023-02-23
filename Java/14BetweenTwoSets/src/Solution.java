import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.List;
import java.util.stream.Stream;

import static java.util.stream.Collectors.toList;

/**
 * Created on Mon Feb 20 2023
 * 
 * @author Carlos Páez
 */
class Result {
    /*
     * Complete the 'getTotalX' function below.
     *
     * The function is expected to return an INTEGER.
     * The function accepts following parameters:
     * 1. INTEGER_ARRAY a
     * 2. INTEGER_ARRAY b
     */

    /**
     * For each number between 1 and 100, check if it is a factor of all numbers in
     * a and if it is a
     * factor of all numbers in b. If it is, increment the count
     * 
     * @param a an array of integers
     * @param b an array of integers
     * @return The number of integers between 1 and 100 that are a factor of all
     *         numbers in a and a
     *         factor of all numbers in b.
     */
    public static int getTotalX(List<Integer> a, List<Integer> b) {
        for (int i = 0; i < a.size(); i++) {
            if (a.get(i) < 1 || a.get(i) > 100) {
                throw new IllegalArgumentException("a[i] must be between 1 and 100");
            }
        }

        for (int j = 0; j < b.size(); j++) {
            if (b.get(j) < 1 || b.get(j) > 100) {
                throw new IllegalArgumentException("b[j] must be between 1 and 100");
            }
        }

        int count = 0;

        for (int i = 1; i <= 100; i++) {
            boolean isFactorOfA = true;
            for (int num : a) {
                if (i % num != 0) {
                    isFactorOfA = false;
                    break;
                }
            }
            if (!isFactorOfA) {
                continue;
            }

            boolean isFactorOfB = true;
            for (int num : b) {
                if (num % i != 0) {
                    isFactorOfB = false;
                    break;
                }
            }
            if (!isFactorOfB) {
                continue;
            }

            count++;
        }
        return count;
    }
}

public class Solution {
    public static void main(String[] args) throws IOException {
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(System.getenv("OUTPUT_PATH")));

        String[] firstMultipleInput = bufferedReader.readLine().replaceAll("\\s+$", "").split(" ");

        int n = Integer.parseInt(firstMultipleInput[0]);

        int m = Integer.parseInt(firstMultipleInput[1]);

        if (n < 1 || n > 10 || m < 1 || m > 10) {
            throw new IllegalArgumentException("n and m must be between 1 and 10");
        }

        List<Integer> arr = Stream.of(bufferedReader.readLine().replaceAll("\\s+$", "").split(" "))
                .map(Integer::parseInt)
                .collect(toList());

        List<Integer> brr = Stream.of(bufferedReader.readLine().replaceAll("\\s+$", "").split(" "))
                .map(Integer::parseInt)
                .collect(toList());

        int total = Result.getTotalX(arr, brr);

        bufferedWriter.write(String.valueOf(total));
        bufferedWriter.newLine();

        bufferedReader.close();
        bufferedWriter.close();
    }
}

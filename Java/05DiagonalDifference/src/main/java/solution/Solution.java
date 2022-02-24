package solution;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.IntStream;
import java.util.stream.Stream;

import static java.util.stream.Collectors.toList;

/**
 * Created on Thu Feb 24 2022
 * @author Carlos Páez
 */
class Result {
    /**
     * Given a 2D array, find the absolute difference between the sums of its diagonals
     * 
     * @param arr an array of integers
     * @return The absolute value of the difference between the sum of the numbers in the left-to-right
     * diagonal and the right-to-left diagonal.
     */
    public static int diagonalDifference(List<List<Integer>> arr) {
        int leftToRight = 0, rightToLeft = 0, x = 0, y = arr.size() - 1;

        for (int i = 0; i < arr.size(); i ++) {
            leftToRight += ((-100 <= arr.get(i).get(x)) && (arr.get(i).get(x) <= 100)) ? arr.get(i).get(x) : 0;
            rightToLeft += ((-100 <= arr.get(i).get(y)) && (arr.get(i).get(y) <= 100)) ? arr.get(i).get(y) : 0;
            x++;
            y--;
        }

        return Math.abs(leftToRight - rightToLeft);
    }
}


public class Solution {
    public static void main(String[] args) throws IOException {
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter("./output.txt"));

        int n = Integer.parseInt(bufferedReader.readLine().trim());

        List<List<Integer>> arr = new ArrayList<>();

        IntStream.range(0, n).forEach(i -> {
            try {
                arr.add(
                    Stream.of(bufferedReader.readLine().replaceAll("\\s+$", "").split(" "))
                        .map(Integer::parseInt)
                        .collect(toList())
                );
            } catch (IOException ex) {
                throw new RuntimeException(ex);
            }
        });

        int result = Result.diagonalDifference(arr);

        bufferedWriter.write(String.valueOf(result));
        bufferedWriter.newLine();

        bufferedReader.close();
        bufferedWriter.close();
    }
}

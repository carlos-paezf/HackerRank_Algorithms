package solution;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Collections;
import java.util.List;
import java.util.stream.Stream;
import static java.util.stream.Collectors.toList;

/**
 * Created on Mon Apr 18 2022
 *
 * @author Carlos Páez
 */
class Result {
    /**
     * It sorts the array, then adds the first four elements to the mini variable and the last four
     * elements to the max variable
     * 
     * @param arr an array of integers
     */
    public static void miniMaxSum(List<Integer> arr) {
        Collections.sort(arr);

        long mini = 0, max = 0; 
        int x = 0, y = arr.size() - 1;

        for (int i = 0; i < arr.size() - 1; i++) {
            if ((1 <= arr.get(i)) && (arr.get(i) <= Math.pow(10, 9))) {
                mini += arr.get(x);
                max += arr.get(y);
                x++;
                y--;
            }
        }

        System.out.print(mini + " " + max);
    }
}


public class Solution {
    /**
     * The above function takes in a list of integers, and returns the minimum and maximum sum of 4 of
     * the 5 integers
     */
    public static void main(String[] args) throws IOException {
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));

        List<Integer> arr = Stream.of(bufferedReader.readLine().replaceAll("\\s+$", "").split(" "))
            .map(Integer::parseInt)
            .collect(toList());
        
        Result.miniMaxSum(arr);

        bufferedReader.close();
    }
}

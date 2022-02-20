package solution;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStreamReader;
// import java.util.Iterator;
import java.util.List;
import java.util.stream.Stream;
import static java.util.stream.Collectors.toList;


/**
 * Created on Sat Feb 19 2022
 * @author Carlos Páez
 */
class Result {

    /*
     * Complete the `simpleArraySum` function below
     * 
     * The function is expected to return an INTEGER
     * The function accepts INTEGER_ARRAY ar as parameter
     */

    /**
     * Given an array of integers, return the sum of the integers
     * 
     * @param ar an array of integers
     * @return The sum of the array elements.
     */
    public static int simpleArraySum(List<Integer> ar) {
        int sum = 0;
        /* Iterator<Integer> it = ar.iterator();
        while (it.hasNext()) {
            int x = it.next();
            if (x <= 1000) sum += x;
            else sum += 0;
        } */
        for (int x: ar) {
            sum = (x <= 1000) ? (sum += x) : (sum += 0);
        }
        return sum;
    }
}


public class Solution {
    /**
     * Given an array of integers, find the sum of its elements
     */
    public static void main(String[] args) throws IOException {
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter("./output.txt"));

        // int arCount = Integer.parseInt(bufferedReader.readLine().trim());

        List<Integer> ar = Stream.of(bufferedReader.readLine().replaceAll("\\s+$", "").split(" "))
            .map(Integer::parseInt)
            .collect(toList());
        
        int result = Result.simpleArraySum(ar);

        bufferedWriter.write(String.valueOf(result));
        bufferedWriter.newLine();

        bufferedReader.close();
        bufferedWriter.close();
    }
}
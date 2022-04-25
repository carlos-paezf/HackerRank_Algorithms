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
 * Created on Mon Apr 25 2022
 * 
 * @author Carlos Páez
 */
class Result {
    public static int birthdayCakeCandles(List<Integer> candles) {
        int counter = 0, max = 0;

        for (int i = 0; i < candles.size(); i++) {
            if ((1 <= candles.get(i)) && (candles.get(i) <= Math.pow(10, 7))) {
                if (candles.get(i) > max) {
                    max = candles.get(i);
                    counter = 1;
                } else if (candles.get(i) == max) {
                    counter++;
                }
            }
        }
        return counter;
    }
}

public class Solution {
    public static void main(String[] args) throws IOException {
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter("./output.txt"));

        int candlesCount = Integer.parseInt(bufferedReader.readLine().trim());
        
        List<Integer> candles = Stream.of(bufferedReader.readLine().replaceAll("\\s+$", "").split(" "))
            .map(Integer::parseInt)
            .collect(toList());

        int result = Result.birthdayCakeCandles(candles);

        bufferedWriter.write(String.valueOf(result));
        bufferedWriter.newLine();

        bufferedReader.close();
        bufferedWriter.close();
    }
}

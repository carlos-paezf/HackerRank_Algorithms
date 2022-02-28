package solution;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.text.DecimalFormat;
import java.text.DecimalFormatSymbols;
import java.util.List;
import java.util.stream.Stream;

import static java.util.stream.Collectors.toList;

/**
 * Created on Mon Feb 28 2022
 * 
 * @author Carlos Páez
 */
class Result {
    public static void plusMinus(int n, List<Integer> arr) {
        float pos = 0, neg = 0, zero = 0;

        DecimalFormatSymbols sp = new DecimalFormatSymbols();
        sp.setDecimalSeparator('.');

        DecimalFormat df = new DecimalFormat("0.000000", sp);

        if (0 < n && n <= 100) {
            for (int i = 0; i < n; i++) {
                if (-100 <= arr.get(i) && arr.get(i) <= 100) {
                    pos += (arr.get(i) > 0) ? 1 : 0;
                    neg += (arr.get(i) < 0) ? 1 : 0;
                    zero += (arr.get(i) == 0) ? 1 : 0;
                }
            }
        }

        float ratioPos = pos / n;
        float ratioNeg = neg / n;
        float ratioZero = zero / n;

        System.out.println(df.format(ratioPos));
        System.out.println(df.format(ratioNeg));
        System.out.println(df.format(ratioZero));
    }
}

public class Solution {
    public static void main(String[] args) throws IOException {
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));

        int n = Integer.parseInt(bufferedReader.readLine().trim());

        List<Integer> arr = Stream.of(bufferedReader.readLine().replaceAll("\\s+$", "").split(" "))
            .map(Integer::parseInt)
            .collect(toList());

        Result.plusMinus(n, arr);

        bufferedReader.close();
    }
}

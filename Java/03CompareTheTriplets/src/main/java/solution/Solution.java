package solution;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Stream;

import static java.util.stream.Collectors.toList;
import static java.util.stream.Collectors.joining;

/**
 * Created on Sun Feb 20 2022
 * 
 * @author Carlos Páez
 */
class Result {

    /**
     * The function `rangeConstraint` takes two integers, `i` and `j`, and returns `true` if `i` and
     * `j` are both between 1 and 100, inclusive, and `false` otherwise
     * 
     * @param i the number of the first row of the matrix.
     * @param j The number of rows in the matrix.
     * @return The return value is a Boolean value.
     */
    public static Boolean rangeConstraint(int i, int j) {
        if (((1 <= i) && (i <= 100)) && ((1 <= j) && (j <= 100)))
            return true;
        return false;
    }

    /**
     * Compare the elements of two lists and return the number of elements that are greater than the
     * other list's elements
     * 
     * @param a an array of integers representing Alice's challenge rating
     * @param b the second list of integers representing Bob's challenge rating
     * @return The list of points.
     */
    public static List<Integer> compareTriplets(List<Integer> a, List<Integer> b) {
        List<Integer> points = new ArrayList<>();

        int alice = 0;
        int bob = 0;

        int maxLen = (a.size() > b.size()) ? a.size() : b.size();

        for (int i = 0; i < maxLen; i++) {
            if ((a.get(i) > b.get(i)) && rangeConstraint(a.get(i), b.get(i))) alice += 1;
            else if ((a.get(i) < b.get(i)) && rangeConstraint(a.get(i), b.get(i))) bob += 1;
        }

        points.add(alice);
        points.add(bob);

        return points;
    }
}

public class Solution {
    /**
     * Compare two lists of integers and return a list of the number of elements that are greater in
     * the first list than the second
     */
    public static void main(String[] args) throws IOException {
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter("./output.txt"));

        List<Integer> a = Stream.of(bufferedReader.readLine().replaceAll("\\s+$", "").split(" "))
            .map(Integer::parseInt)
            .collect(toList());

        List<Integer> b = Stream.of(bufferedReader.readLine().replaceAll("\\s+$", "").split(" "))
            .map(Integer::parseInt)
            .collect(toList());


        List<Integer> result = Result.compareTriplets(a, b);

        bufferedWriter.write(
            result.stream()
                .map(Object::toString)
                .collect(joining(" "))
            + "\n"
        );

        bufferedReader.close();
        bufferedWriter.close();
    }
}

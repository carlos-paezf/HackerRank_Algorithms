import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.List;
import java.util.stream.Stream;
import static java.util.stream.Collectors.toList;

class Result {
    /*
     * Complete the 'countApplesAndOranges' function below.
     *
     * The function accepts following parameters:
     * 1. INTEGER s
     * 2. INTEGER t
     * 3. INTEGER a
     * 4. INTEGER b
     * 5. INTEGER_ARRAY apples
     * 6. INTEGER_ARRAY oranges
     */

    /**
     * It takes in the house's starting and ending points, the apple and orange
     * trees' locations, and
     * the distances the apples and oranges fell from their respective trees. It
     * then prints out the
     * number of apples and oranges that landed on the house
     * 
     * @param s       starting point of Sam's house location.
     * @param t       integer, denoting the number of apples that fell on Sam's
     *                house
     * @param a       starting point of Sam's house location.
     * @param b       starting point of Sam's house location.
     * @param apples  an array of integers representing the distances that each
     *                apple falls from point
     *                a.
     * @param oranges -2, 2, 1
     */
    public static void countApplesAndOranges(int s, int t, int a, int b, List<Integer> apples, List<Integer> oranges) {
        final int MIN_LIMIT = -100000;
        final int MAX_LIMIT = 100000;

        for (int param : new int[] { s, t, a, b }) {
            if (param < 1 || param > MAX_LIMIT) {
                System.out.println("Error");
                return;
            }
        }

        int validApples = 0;
        int validOranges = 0;

        for (int apple : apples) {
            if (apple < MIN_LIMIT || apple > MAX_LIMIT) {
                continue;
            }
            if (s <= (apple + a) && (apple + a) <= t) {
                validApples++;
            }
        }

        for (int orange : oranges) {
            if (orange < MIN_LIMIT || orange > MAX_LIMIT) {
                continue;
            }
            if (s <= (orange + b) && (orange + b) <= t) {
                validOranges++;
            }
        }

        System.out.println(validApples);
        System.out.println(validOranges);
    }
}

public class Solution {
    public static void main(String[] args) throws IOException {
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));

        String[] firstMultipleInput = bufferedReader.readLine().replaceAll("\\s+$", "").split(" ");

        int s = Integer.parseInt(firstMultipleInput[0]);

        int t = Integer.parseInt(firstMultipleInput[1]);

        String[] secondMultipleInput = bufferedReader.readLine().replaceAll("\\s+$", "").split(" ");

        int a = Integer.parseInt(secondMultipleInput[0]);

        int b = Integer.parseInt(secondMultipleInput[1]);

        String[] thirdMultipleInput = bufferedReader.readLine().replaceAll("\\s+$", "").split(" ");

        int m = Integer.parseInt(thirdMultipleInput[0]);

        int n = Integer.parseInt(thirdMultipleInput[1]);

        List<Integer> apples = Stream.of(bufferedReader.readLine().replaceAll("\\s+$", "").split(" "))
                .map(Integer::parseInt)
                .collect(toList());

        List<Integer> oranges = Stream.of(bufferedReader.readLine().replaceAll("\\s+$", "").split(" "))
                .map(Integer::parseInt)
                .collect(toList());

        Result.countApplesAndOranges(s, t, a, b, apples, oranges);

        bufferedReader.close();
    }
}

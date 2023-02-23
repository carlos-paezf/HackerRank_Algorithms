import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStreamReader;

/**
 * Created on Wed Feb 22 2023
 * 
 * @author Carlos Páez
 */
class Result {
    /*
     * Complete the 'kangaroo' function below.
     *
     * The function is expected to return a STRING.
     * The function accepts following parameters:
     * 1. INTEGER x1
     * 2. INTEGER v1
     * 3. INTEGER x2
     * 4. INTEGER v2
     */

    /**
     * If the kangaroos are moving in the same direction, they will never meet. If
     * they are moving in
     * opposite directions, they will meet if and only if the distance between them
     * is a multiple of
     * the difference in their speeds
     * 
     * @param x1 starting position for kangaroo 1
     * @param v1 Kangaroo 1's jump distance
     * @param x2 starting position of kangaroo 2
     * @param v2 the velocity of the second kangaroo
     * @return a string.
     */
    public static String kangaroo(int x1, int v1, int x2, int v2) {
        final int MAX_LIMIT = 10000;

        boolean invalidCondition = (x1 < 0 || x1 > MAX_LIMIT || x2 < 0 || x2 > MAX_LIMIT ||
                v1 < 0 || v1 > MAX_LIMIT || v2 < 0 || v2 > MAX_LIMIT ||
                x1 > x2 || v1 < v2);

        if (invalidCondition)
            return "NO";

        if (v1 != v2 && (x2 - x1) % (v2 - v1) == 0)
            return "YES";

        return "NO";
    }
}

public class Solution {
    public static void main(String[] args) throws IOException {
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(System.getenv("OUTPUT_PATH")));

        String[] firstMultipleInput = bufferedReader.readLine().replaceAll("\\s+$", "").split(" ");

        int x1 = Integer.parseInt(firstMultipleInput[0]);

        int v1 = Integer.parseInt(firstMultipleInput[1]);

        int x2 = Integer.parseInt(firstMultipleInput[2]);

        int v2 = Integer.parseInt(firstMultipleInput[3]);

        String result = Result.kangaroo(x1, v1, x2, v2);

        bufferedWriter.write(result);
        bufferedWriter.newLine();

        bufferedReader.close();
        bufferedWriter.close();
    }
}

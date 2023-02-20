import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.IntStream;
import static java.util.stream.Collectors.joining;
import static java.util.stream.Collectors.toList;

class Result {
    /**
     * Complete the 'gradingStudents' function below
     * 
     * The function is expected to return an INTEGER_ARRAY
     * The function is accepts INTEGER_ARRAY grades as parameter
     */

    /**
     * If the grade is less than 38, or the grade modulo 5 is less than 3, then the
     * grade is not
     * rounded. Otherwise, the grade is rounded up to the next multiple of 5
     * 
     * @param grades an array of integers representing grades before rounding
     * @return A list of integers.
     */
    public static List<Integer> gradingStudents(List<Integer> grades) {
        List<Integer> result = new ArrayList<Integer>();

        for (int grade : grades) {
            int roundedGrade = (grade < 38 || grade % 5 < 3) ? grade : grade + (5 - grade % 5);
            result.add(roundedGrade);
        }

        return result;
    }
}

public class Solution {
    public static void main(String[] args) throws IOException {
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter("./output.txt"));

        int gradesCount = Integer.parseInt(bufferedReader.readLine().trim());

        List<Integer> grades = IntStream.range(0, gradesCount)
                .mapToObj(i -> {
                    try {
                        return bufferedReader.readLine().replaceAll("\\s+$", "");
                    } catch (IOException ex) {
                        throw new RuntimeException(ex);
                    }
                })
                .map(String::trim)
                .map(Integer::parseInt)
                .collect(toList());

        List<Integer> result = Result.gradingStudents(grades);

        bufferedWriter.write(
                result.stream()
                        .map(Object::toString)
                        .collect(joining("\n"))
                        + "\n");

        bufferedReader.close();
        bufferedWriter.close();
    }
}

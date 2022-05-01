package solution;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStreamReader;

/**
 * Created on Sun May 01 2022
 * 
 * @author Carlos Páez
 */

class Result {
    /**
     * If the time is AM, then we check if the hour is 12. If it is, we return 00 plus the rest of the
     * string. If it's not, we return the entire string. If the time is PM, then we check if the hour
     * is 12. If it is, we return the entire string. If it's not, we add 12 to the hour, format it to
     * two digits, and return it plus the rest of the string
     * 
     * @param s a string representing time in  hour format
     * @return The time in 24 hour format.
     */
    public static String timeConversion(String s) {
        if (s.substring(8).equals("AM")) {
            if (s.substring(0, 2).equals("12")) {
                return "00" + s.substring(2, 8);
            } else {
                return s.substring(0, 8);
            }
        } else {
            if (s.substring(0, 2).equals("12")) {
                return s.substring(0, 8);
            } else {
                int hour = Integer.parseInt(s.substring(0, 2)) + 12;
                return String.format("%02d", hour) + s.substring(2, 8);
            }
        }
    }
}

public class Solution {
    /**
     * It reads the input from the console and writes the output to a file
     */
    public static void main(String[] args) throws IOException {
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter("./output.txt"));

        String s = bufferedReader.readLine();

        String result = Result.timeConversion(s);

        bufferedWriter.write(result);
        bufferedWriter.newLine();

        bufferedReader.close();
        bufferedWriter.close();
    }
}

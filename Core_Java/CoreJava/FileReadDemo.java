import java.io.BufferedReader;
import java.io.FileReader;

public class FileReadDemo {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new FileReader("output.txt"));
        System.out.println(br.readLine());
        br.close();
    }
}
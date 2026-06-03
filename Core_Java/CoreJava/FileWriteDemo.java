import java.io.FileWriter;

public class FileWriteDemo {
    public static void main(String[] args) throws Exception {
        FileWriter fw = new FileWriter("output.txt");
        fw.write("Hello File Handling");
        fw.close();
    }
}
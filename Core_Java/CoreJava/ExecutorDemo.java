import java.util.concurrent.*;

public class ExecutorDemo {
    public static void main(String[] args) {

        ExecutorService ex = Executors.newFixedThreadPool(2);

        ex.submit(() -> System.out.println("Task 1"));
        ex.submit(() -> System.out.println("Task 2"));

        ex.shutdown();
    }
}
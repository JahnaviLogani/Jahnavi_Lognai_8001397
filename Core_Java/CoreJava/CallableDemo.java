import java.util.concurrent.*;

public class CallableDemo {
    public static void main(String[] args) {

        ExecutorService ex = Executors.newFixedThreadPool(2);

        Callable<Integer> task1 = () -> 10 + 20;
        Callable<Integer> task2 = () -> 30 + 40;

        try {
            Future<Integer> f1 = ex.submit(task1);
            Future<Integer> f2 = ex.submit(task2);

            System.out.println("Result 1: " + f1.get());
            System.out.println("Result 2: " + f2.get());

        } catch (Exception e) {
            System.out.println(e);
        }

        ex.shutdown();
    }
}
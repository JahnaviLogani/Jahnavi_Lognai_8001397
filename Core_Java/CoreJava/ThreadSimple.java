public class ThreadSimple {
    public static void main(String[] args) {

        Runnable r = () -> System.out.println("Thread Running");

        Thread t = new Thread(r);
        t.start();
    }
}
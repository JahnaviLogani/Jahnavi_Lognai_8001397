public class VirtualThreadDemo {
    public static void main(String[] args) {

        Runnable task = () -> {
            System.out.println("Running: " + Thread.currentThread());
        };

        Thread.startVirtualThread(task);
        Thread.startVirtualThread(task);
        Thread.startVirtualThread(task);
    }
}
public class ReflectionDemo {
    public static void main(String[] args) throws Exception {

        Class<?> c = Class.forName("java.lang.String");

        System.out.println("Class Name: " + c.getName());
    }
}
import java.lang.reflect.Method;

public class AdvancedReflectionDemo {

    public static void showMessage() {
        System.out.println("Hello Reflection");
    }

    public static void main(String[] args) {

        try {
            Class<?> c = Class.forName("AdvancedReflectionDemo");

            Method[] methods = c.getDeclaredMethods();

            for (Method m : methods) {
                System.out.println("Method: " + m.getName());
            }

            Method method = c.getMethod("showMessage");
            method.invoke(c.getDeclaredConstructor().newInstance());

        } catch (Exception e) {
            System.out.println(e);
        }
    }
}
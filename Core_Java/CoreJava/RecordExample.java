import java.util.*;

record Person(String name, int age) {}

public class RecordExample {
    public static void main(String[] args) {

        Person p1 = new Person("Deepika", 21);
        Person p2 = new Person("Asha", 25);

        List<Person> list = Arrays.asList(p1, p2);

        for(Person p : list) {
            if(p.age() > 22) {
                System.out.println(p);
            }
        }
    }
}
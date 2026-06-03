import java.util.Random;
import java.util.Scanner;

public class GuessNumber {
    public static void main(String[] args) {
        Random rand = new Random();
        int num = rand.nextInt(100) + 1;

        Scanner sc = new Scanner(System.in);
        int guess;

        do {
            guess = sc.nextInt();

            if(guess > num)
                System.out.println("Too High");
            else if(guess < num)
                System.out.println("Too Low");

        } while(guess != num);

        System.out.println("Correct!");
        sc.close();
    }
}
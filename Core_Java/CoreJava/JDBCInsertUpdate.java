import java.sql.*;

public class JDBCInsertUpdate {
    public static void main(String[] args) {

        try {
            Connection con = DriverManager.getConnection(
                "jdbc:mysql://localhost:3306/testdb",
                "root",
                "password"
            );

            // INSERT
            String insertQuery = "INSERT INTO students VALUES (1, 'Deepika')";
            Statement st = con.createStatement();
            st.executeUpdate(insertQuery);

            // UPDATE
            String updateQuery = "UPDATE students SET name='Sai' WHERE id=1";
            st.executeUpdate(updateQuery);

            System.out.println("Insert & Update Done");

            con.close();

        } catch(Exception e) {
            System.out.println(e);
        }
    }
}
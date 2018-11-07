package controller;
/*package accesDB;
import java.sql.*;
import java.util.ArrayList;
import utils.Produit;

public class AccesBase {
	
	public static ArrayList<Produit> getProducts() {
		Produit p;
		ArrayList <Produit> al= new ArrayList<Produit>();
		try{  
			Class.forName("com.mysql.cj.jdbc.Driver");  
			Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/produits?useUnicode=true&useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=UTC","root","root");    
			Statement stmt=con.createStatement();  
			ResultSet rs=stmt.executeQuery("select * from produit");  
			while(rs.next()) {
			p=new Produit(rs.getString(2), rs.getFloat(3), rs.getString(4), rs.getString(5), rs.getString(6) );
			p.setId(rs.getInt(1));
			al.add(p);
			}
			con.close();  
			}
		catch(Exception e){ System.out.println(e);}  
		return al;
	}
	
	/*public static void main(String args[]) {
		ArrayList <Produit> al=getProducts();
		al.forEach(System.out::println);  
	}
}*/


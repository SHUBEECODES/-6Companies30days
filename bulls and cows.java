import java.util.*;

public class dsathirtydays {

    public static String bullsandcows(String secret, String guess){
      HashMap<Character,Integer> map = new HashMap<>();
String ans = "";
String eq="";
int c=0;
for(int i=0;i<secret.length();i++){
    if(secret.charAt(i)==guess.charAt(i)){
        c++;

    }else{
        eq+=guess.charAt(i);
  if(map.containsKey(secret.charAt(i))){
      map.put(secret.charAt(i),map.get(secret.charAt(i))+1);
  }else{

      map.put(secret.charAt(i),1);
  }}
}
int ic=0;
String a  = Integer.toString(c);
for(int i=0;i<eq.length();i++){
    if(map.containsKey(eq.charAt(i)) && map.get(eq.charAt(i))!=0){
        ic++;
        map.put(eq.charAt(i),map.get(eq.charAt(i))-1);
    }
}
String b = Integer.toString(ic);
ans = a+"A"+b+"B";
return ans;

    }

    public static void main(String[] args) {
        String secret = "1123", guess = "0111";
        System.out.println(bullsandcows(secret,guess));



    }
}

import java.util.*;

public class dsathirtydays {
    public static int wordCount(String[] startWords, String[] targetWords) {
int ans=0;
HashSet<String> set = new HashSet<>();
for(String s: startWords){
    char[] charstr = s.toCharArray();
    Arrays.sort(charstr);
    set.add(new String(charstr));
}
for(String t : targetWords){
    int n = t.length();
    for(int i=0;i<n;i++){
        String newt = t.substring(0,i)+ t.substring(i+1);
        char[] chart = newt.toCharArray();
        Arrays.sort(chart);
        if(set.contains(new String(chart))){
            ans++;
            break;
        }
    }
}

return ans;
    }



    public static void main(String[] args) {
     String[] sw = {"mox","bj","rsy","jqsh"};
     String[] tw = {"trk","vjb","jkr"};
        System.out.println(wordCount(sw,tw));


      }






    }


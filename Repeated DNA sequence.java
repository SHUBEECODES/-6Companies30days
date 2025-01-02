import java.util.*;

public class dsathirtydays {

    public static List<String> repeateddnasequence(String s){
        HashMap<String,Integer> map = new HashMap<>();
        List<String > list = new ArrayList<>();
        int i=0;
        int j=10;
        while(j<=s.length()){
            String r = s.substring(i,j);
if(map.containsKey(r)){
    map.put(r,map.get(r)+1);
}else{
    map.put(r,1);
}
i++;
j++;
        }
        Set<String>Key = map.keySet();
        for(String keys : Key){
            if(map.get(keys)>1){
                list.add(keys);
            }
        }
        return list;
    }

    public static void main(String[] args) {
        int[][] nums = {{5,4},{6,4},{6,7},{2,3}};
        String s = "AAAAAAAAAAAAA";
        System.out.println(repeateddnasequence(s));


    }
}

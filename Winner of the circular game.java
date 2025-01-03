import java.util.*;

public class dsathirtydays {

    public static int findthewinner(int n,int k){
ArrayList<Integer> list = new ArrayList<>();
for(int i=0;i<n;i++){
    list.add(i);
}
int idx = 0;
while(list.size()>1){
    idx=idx+k-1;
    idx=idx%list.size();
    list.remove(idx);
}
return list.get(0)+1;
    }

    public static void main(String[] args) {
        System.out.println(findthewinner(6,5));



    }
}

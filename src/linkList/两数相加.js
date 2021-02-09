var addTwoNumbers = function(l1, l2) {
    let l3 = new ListNode(0);
    let p1 = l1;
    let p2 = l2;
    let p3 = l3;
    let carry = 0;
    while(p1 || p2){
        let v1 = p1 ? p1.val : 0;
        let v2 = p2 ? p2.val : 0;
        let val = v1 + v2 + carry;
        carry = Math.floor(val / 10);
        p3.next = new ListNode(val % 10);
        if(p1) p1 = p1.next;
        if(p2) p2 = p2.next;
        p3 = p3.next;
    }
    if(carry) p3.next = new ListNode(carry);
    return l3.next;

};

var addTwoNumbers = function(l1, l2) {
    let tmp = 0
    let cur = l1
    let pre = null
    while(cur !== null && l2 !== null){
        let v =  cur.val + l2.val + tmp
        cur.val = (v) % 10
        tmp = Math.floor(v / 10)
        pre = cur 
        cur = cur.next
        l2 = l2.next
    }
    if(cur !== null){
        while(cur !== null){
            let v = cur.val + tmp
            cur.val = (v) % 10
            tmp = Math.floor(v / 10)
            pre = cur 
            cur = cur.next
        }
        if(tmp > 0){
            pre.next = new ListNode(tmp)
        }   
    }else{
            pre.next = l2
            let p = pre;
            while(l2 !== null){
                let v = l2.val + tmp
                l2.val = (v) % 10
                tmp = Math.floor(v / 10)
                p = l2
                l2 = l2.next 
            }
            if(tmp > 0)
                p.next = new ListNode(tmp) 
    }
    
    return l1
};
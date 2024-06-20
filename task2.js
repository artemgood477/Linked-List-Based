class ListNode {
    constructor(val = 0, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  
  function removeNthFromEnd(head, n) {
    let dummy = new ListNode(0);
    dummy.next = head;
    let first = dummy;
    let second = dummy;
  
    for (let i = 0; i <= n; i++) {
      first = first.next;
    }
  
    while (first !== null) {
      first = first.next;
      second = second.next;
    }
  
    second.next = second.next.next;
  
    return dummy.next;
  }
  
  let head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
  
  let modifiedList = removeNthFromEnd(head, 2);
  
  let current = modifiedList;
  while (current !== null) {
    console.log(current.val);
    current = current.next;
  }
  
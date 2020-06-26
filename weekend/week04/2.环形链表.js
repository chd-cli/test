// 给定一个链表，判断链表中是否有环。
let hasCycle = function(head) { // 时间复杂度是O(n)，空间复杂度O(1)
    // 创建快慢指针，都指向头节点
    let slow = head, fast = head;

    // 循环链表
    while (fast && fast.next) {
        // 慢指针每走一步，快指针就走两步
        slow = slow.next;
        fast = fast.next.next;
        // 当快慢指针的值相等时，就表示出现了环
        if (slow === fast) return true;
    }
    return false;
};
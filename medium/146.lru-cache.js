/*
 * @lc app=leetcode id=146 lang=javascript
 *
 * [146] LRU Cache
 */

// @lc code=start

var ListNode = function(key, val) {
    this.key = key;
    this.value = val;
    this.next = null;
    this.prev = null;
}

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity;

    this.head = new ListNode(0, 0); // 最近访问节点存到 head
    this.tail = new ListNode(0, 0);

    this.head.next = this.tail;
    this.tail.prev = this.head;

    this.map = new Map();
};

LRUCache.prototype.insertToHead = function inertToHead(node) {
    node.next = this.head.next;
    node.prev = this.head;

    this.head.next.prev = node;
    this.head.next = node;
}

LRUCache.prototype.bringToHead = function bringToHead(node) {
    // 已经是头节点
    if (node === this.head.next) return;
    this.remove(node);
    this.insertToHead(node);
}

LRUCache.prototype.remove = function remove(node) {
    const prev = node.prev;
    const next = node.next;

    prev.next = next;
    next.prev = prev;
}

LRUCache.prototype.removeTail = function removeTail() {
    if (this.head.next === this.tail) return null;
    const target = this.tail.prev;
    this.remove(target);
    return target;
}

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    // 为了保证目标节点被移到 head，需要持有它的前一个节点
    const target = this.map.get(key);
    if (!target) {
        return -1;
    }
    this.bringToHead(target);
    return target.value;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    const target = this.map.get(key);
    if (target) {
        target.value = value;
        this.bringToHead(target);
        return;
    }

    if (this.map.size >= this.capacity) {
        const node = this.removeTail();
        node.prev = null;
        node.next = null;
        this.map.delete(node.key);
    }

    const node = new ListNode(key, value);
    this.insertToHead(node);
    this.map.set(key, node);
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end


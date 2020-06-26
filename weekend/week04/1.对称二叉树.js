/* 
    1
   / \
  2   2
 / \ / \
3  4 4  3
*/

let isSymmetric = function(root) {
    // 如果root为null也算是一种对称二叉树
    if (!root) return true;

    let help = (left, right) => {
        // 左右子树都为null也是对称的
        if (!left && !right) {
            return true;
        }
        // 左子树有右子树没有 || 左子树没有右子树有 || 左右子树的值相等
        if ((left && !right) || (!left && right) || (left.val !== right.val)) {
            return false;   // 都是不对称的
        }
        // 继续递归调用传入左右子树的左右子节点
        return help(left.left, right.right) && help(left.right, right.left);
    };
    return help(root.left, root.right);
}
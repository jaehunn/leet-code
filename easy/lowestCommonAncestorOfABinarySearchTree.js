/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
function lowestCommonAncestor(root, p, q) {
  while (root) {
    if (root.val < p.val && root.val < q.val) root = root.right;
    else if (root.val > p.val && root.val > q.val) root = root.left;
    else return root;
  }

  return root;
}

function lowestCommonAncestor(root, p, q) {
  if (root.val < p.val && root.val < q.val) return lowestCommonAncestor(root.right, p, q);

  if (root.val > p.val && root.val > q.val) return lowestCommonAncestor(root.left, p, q);

  return root;
}

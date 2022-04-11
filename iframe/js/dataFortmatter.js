export default (data) => {
  // By default the last item of each array is the "value".
  // All previous items are keys
  const tree = { name: "root", children: [] };
  for (let i = 0; i < data.length; i++) {
    let root = tree.children;
    const value = data[i][data[i].length - 1];
    for (let j = 0; j < data[i].length - 1; j++) {
      const isTheLastKey = j == data[i].length - 2;
      const name = "" + data[i][j];
      const child = findChildrenByName(root, name);
      if (child == null) {
          const node = appendChild(root, name, value, isTheLastKey);
          if ('children' in node) root = node.children;
      }
      else root = child.children;
    }
  }
  return tree;
};

function findChildrenByName(children, name) {
  return children.find((child) => child.name === name);
}

function appendChild(root, name, value, isTheLastKey) {
  const node = isTheLastKey ? { name, value } : { name, children: [] };
  root.push(node);
  return node;
}

const containsComponent = (object, componentName) => {
  if (object.type === componentName) { return true; }
  let match;
  let hasMultipleChildren;
  const children = getChildren(object);

  if (checkCustomImported(children, componentName)) { return true; }

  if (children && children.length) {
    match = children.some((child) => getClassName(child) === componentName);
  } else if (children) {
    match = object.props.children.type.displayName === componentName;
  } else {
    return '[object containsComponent] is not able to parse this object!';
  }

  if (match) {
    return match;
  } else {
    containsComponent(children);
  }

  return match;
};

const checkCustomImported = (children, componentName) => {
  let match = false;
  //single child
  if (children && children.type && children.type.name) {
    if (children.type.name === componentName) { match = true; }
    console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ never before or after children.type')
    console.log(children.type.name)
  }

  //multiple children
  if (children && children[0] && children[0].type && children[0].type.name) {
    if (children[0].type.name === componentName) { match = true; }
    console.log('$$$$$$$[0]$$$$$$$$[0]$$$$$$$$[0]$$$$$$$ never or after children.type')
    console.log(children[0].type.name)
  }
  return match;
}

const getClassName = (object) => {
  /* return object.constructor.name;*/
  return object.type.displayName;
};

const getChildren = (object) => {
  let children;
  try {
    return object.props.children;
  }
  catch (error) {
    return undefined;
  }
};

export default containsComponent;

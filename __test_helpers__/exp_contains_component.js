const containsComponent = (object, componentName) => {
  if (object.type === componentName) { return true; }
  let match;
  /* let hasMultipleChildren;*/

  const children = getChildren(object);

  if (children && children.length) {
    checkCustomImportedChildren(children, componentName);
  } else {
    checkCustomImportedChild(children, componentName);
  }

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
};

const checkCustomImportedChild = (child, componentName) => {
  let match = false;
  //single child
  if (child && child.type && child.type.name) {
    if (child.type.name === componentName) { match = true; }
    console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ never before or after children.type')
    console.log(child.type.name)
  }

  return match;
};

const checkCustomImportedChildren = (children, componentName) => {
  return children.some((child) => { checkTypeName(child, componentName)});
};

const checkTypeName = (child, componentName) => {
  let match = false;

  if (child.type && child.type.name) {
    console.log('#################################### stuffin')
    console.log(child.type.name);
    if (child.type.name === componentName) { match = true; }
  }

  return match;
};

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

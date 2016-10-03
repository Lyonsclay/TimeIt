const containsComponent = (object, componentName) => {
  if (object.type === componentName) { return true; }
  let match;
  const children = getChildren(object);

  if (children.length) {
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

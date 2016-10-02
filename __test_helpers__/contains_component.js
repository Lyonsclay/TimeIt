const containsComponent = (object, componentName) => {
  if (object.type === componentName) { return true; }

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
  let match;
  const children = getChildren(object);
  console.log('&&&&&&&&&&&&&&&&&&& billion &&&&&&&&&&&&&&&&&&')
  console.log(object.constructor.name);
  console.log(object.props.children[0].type.displayName);

  if (children && children.length) {
    match = children.some((child) => getClassName(child) === componentName);
  } else if (children) {
    match = object.props.children.type.displayName === componentName;
  } else {
    return 'returning undefined stuff';
  }

  if (match) {
    return match;
  } else {
    containsComponent(children);
  }

  return match;
};

export default containsComponent;

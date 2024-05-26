// $ GLOBAL SCOPE :

let a = ABC;
function a() {
  // $ BLOCK SCOPE :
  let ab = BCD; //* BLOCK SCOPE

  var bc = EDF;
  //$ FUNCTIONAL SCOPE / LOCAL SCOPE
}

if (a == 'b') {
    console.log("wow");
}

switch (a) {
    case 'b':
        console.log('wow');
        break;

    default:
        break;
}
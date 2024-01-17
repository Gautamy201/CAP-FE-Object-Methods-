// Problem-1 Rectangle Object

// create object vareable for oject
let Rectangle = {
    Length:20,
    With:30
}
// create function for Area of reactange finde
Are_Of_Rectangle = (l,b) => {
    return l*b
}
// create function for Perimeter of reactange finde
Perimeter_Of_Rectangle = (l,b) => {
    return 2*l+2*b
}
// print output
console.log(`Are_Of_Rectangle is ${Are_Of_Rectangle(Rectangle.Length,Rectangle.With) } 
Perimeter_Of_Rectangle is ${Perimeter_Of_Rectangle(Rectangle.Length,Rectangle.With)}`)

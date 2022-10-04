var calcular = (e , t , j ,p) => { 
    j = j > 1 ? j / 100 : j
    var f = t - e
    return e + (f * Math.pow( 1 + j, p) )
}

var e = 1
var t = 2
var j = 3
var p = 4

console.log(calcular(e, t, j, p))
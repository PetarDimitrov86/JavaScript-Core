function calcTriangleArea ([A, B, C]){
    let semiper = (Number(A) + Number(B) + Number(C)) / 2;
    return Math.sqrt(semiper * (semiper - A) * (semiper - B) * (semiper - C));
}
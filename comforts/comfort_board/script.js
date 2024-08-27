var BFDI = document.getElementById('bfdi')
var II = document.getElementById('ii')
var MD = document.getElementById('md')
var ONE = document.getElementById('one')
var OTHER = document.getElementById('other')

function loadBFDI() {
    BFDI.style.visibility = "visible"
    II.style.visibility = "collapse"
    MD.style.visibility = "collapse"
    ONE.style.visibility = "collapse"
    OTHER.style.visibility = "collapse"
}
function loadII() {
    BFDI.style.visibility = "collapse"
    II.style.visibility = "visible"
    MD.style.visibility = "collapse"
    ONE.style.visibility = "collapse"
    OTHER.style.visibility = "collapse"
}
function loadMD() {
    BFDI.style.visibility = "collapse"
    II.style.visibility = "collapse"
    MD.style.visibility = "visible"
    ONE.style.visibility = "collapse"
    OTHER.style.visibility = "collapse"
}
function loadONE() {
    BFDI.style.visibility = "collapse"
    II.style.visibility = "collapse"
    MD.style.visibility = "collapse"
    ONE.style.visibility = "visible"
    OTHER.style.visibility = "collapse"
}
function loadOTHER() {
    BFDI.style.visibility = "collapse"
    II.style.visibility = "collapse"
    MD.style.visibility = "collapse"
    ONE.style.visibility = "collapse"
    OTHER.style.visibility = "visible"
}

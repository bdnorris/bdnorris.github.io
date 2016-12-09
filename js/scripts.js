var modDate = function() {
    var d = new Date(document.lastModified);
    return moment(d).fromNow();
}
var lastUpdatedP = document.getElementById('last-updated');
lastUpdatedP.innerHTML = lastUpdatedP.innerHTML + modDate() ;

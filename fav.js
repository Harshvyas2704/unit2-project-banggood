function setFavicons(favImg){
    let headTitle = document.querySelector('head');
    let setFavicon = document.createElement('link');
    setFavicon.setAttribute('rel','shortcut icon');
    setFavicon.setAttribute('href',favImg);
    headTitle.appendChild(setFavicon);
}
setFavicons('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRIuZrJE-JRxi1rpADgtpRdizv_vcK0SvhSw&usqp=CAU');
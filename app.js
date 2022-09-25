let altEkran = document.querySelector(".current-display");
let üstEkran = document.querySelector(".previous-display");
let altY = "";
let üstY = "";
let islem='';
const hesapla = (üstY, islem, altY) => {
  if (islem == "+") sonuc = üstY + altY;
  else if (islem == "-") sonuc = üstY - altY;
  else if (islem == "x") sonuc = üstY * altY;
  else if (islem == "÷") {
    if (altY != 0) sonuc = üstY / altY;
    else sonuc = "hatali rakam girdiniz";
  } else sonuc = "hatali islem girdiniz";
  return sonuc;
};
console.log(hesapla(10, "+", 2));

document.querySelectorAll(".num").forEach(
  (a) =>
    (a.onclick = () => {
        if(altY==''){
          altY = a.textContent;
        }else{
            altY=altY + a.textContent
        }
      
      altY = Number(altY)
      console.log(typeof(altY));
      altEkran.textContent = altY;
      document.querySelectorAll(".operator").forEach(
        (islem) =>
          (islem.onclick = () => {
            islem = islem.textContent;
            üstY = altY;
            altY=''
            üstEkran.textContent = üstY + islem;
            altEkran.textContent = "";

             document.querySelector(".equal").onclick = () => {
               altEkran.textContent = hesapla(üstY,islem,altY);
               üstEkran.textContent = "";
               
             };



          })
      );
     
    })
);

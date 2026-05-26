/* ================= LOGO PASARAN ================= */
return data.data.url;

}

async function shareOnline(){

const preview=document.getElementById("capture");

await document.fonts.ready;

await waitImagesLoaded();

const canvas=await html2canvas(preview,{
useCORS:true,
allowTaint:false,
backgroundColor:null,
scale:2
});

const base64=canvas.toDataURL("image/png");

try{

const url=await uploadToImgbb(base64);

document.getElementById("shareLink").innerHTML=`
<a href="${url}" target="_blank">
${url}
</a>
`;

}catch(err){

alert("Upload gagal, periksa API KEY IMGBB");

}

}

/* ================= AUTO ================= */

setInterval(()=>{

generateAll();

},10000);

/* ================= EVENT ================= */

updateDate();

preloadImages();

generateAll();

document.getElementById("marketSelect")
.addEventListener("change",generateAll);


document.getElementById("shioSelect")
.addEventListener("change",generateAll);


document.getElementById("templateSelect")
.addEventListener("change",generateAll);


document.getElementById("customSyair")
.addEventListener("input",generateAll);
var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");
var newImage;
var imgList = [];
var basicWidth = 200, // 210 - 10
  basicHeight = 287; // 297 - 10
var { jsPDF } = window.jspdf;

function loadFile(event) {
  var imgsNode = document.getElementById("img-list");
  newImage = document.createElement("img");
  var imgSrc = URL.createObjectURL(event.target.files[0]);
  //   var imgSrc =
  //     "https://web.archive.org/web/20250716193034/https://cdn.55haitao.com/bbs/data/attachment/banner/2022/10/10/9379106e4d735cdb762d2f25d223a2a1.jpg";
  newImage.src = imgSrc;
  //   newImage.crossorigin = "anonymous";
  //   var imgStr = `<div class="pdfconv-imgitem"><i class="pdfconv-imgdelete"></i><img src="${imgSrc}" /></div>`;
  //   imgsNode.innerHTML = imgStr;
  var keyStamp = Date.now();
  var imgNode = createDocument(imgSrc, keyStamp);
  imgsNode.appendChild(imgNode);
  $(".pdfconv-imgdelete")
    .off("click")
    .on("click", function () {
      //   console.log($(this).parent().data("stamp"));
      var thisKey = $(this).parent().data("stamp");
      var deIndex = 0;
      for (var i = 0; i < imgList.length; i++) {
        if (imgList[i].keyStamp == thisKey) {
          deIndex = i;
          break;
        }
      }
      //   console.log("ç´¢å¼•ï¼š", deIndex);
      imgList.splice(deIndex, 1);
      $(this).parent().remove();
      if (imgList.length === 0) {
        $(".pdfconv-bottom").hide();
        $(".pdfconv-upbtn").show();
        $(".pdfconv-footer").removeClass("mbt80");
      }
    });
  newImage.keyStamp = keyStamp;
  imgList.push(newImage);
  if (imgList.length > 0) {
    $(".pdfconv-bottom").show();
    $(".pdfconv-upbtn").hide();
    $(".pdfconv-footer").addClass("mbt80");
  }
  document.getElementById("input-files").value = "";
}

function createDocument(imgSrc, keyStamp) {
  const template = `<div class="pdfconv-imgitem" data-stamp="${keyStamp}"><i class="pdfconv-imgdelete"></i><img crossorigin="anonymous" src="${imgSrc}" /></div>`;
  let doc = new DOMParser().parseFromString(template, "text/html");
  let div = doc.querySelector(".pdfconv-imgitem");
  return div;
}

function pdfDown() {
  var pdfDoc = new jsPDF({
    unit: "mm",
    //   format: [basicWidth + 20, basicHeight],
    format: "a4",
    hotfixes: ["px_scaling"],
  });

  var docHeight = 0;
  var imgNum = 0;
  for (var i = 0; i < imgList.length; i++) {
    var iWidth = imgList[i].width;
    var iHeight = imgList[i].height;
    iHeight = parseInt((iHeight * basicWidth) / iWidth);
    if (imgNum > 0) {
      pdfDoc.addPage();
    }
    if (basicHeight > iHeight) {
      docHeight = (basicHeight - iHeight) / 2;
    } else {
      docHeight = 5;
    }
    pdfDoc.addImage(imgList[i], 5, docHeight, basicWidth, iHeight);
    imgNum += 1;
  }
  pdfDoc.save("ImgtoPDF.pdf");
}

$(function () {
  $(".pdfconv-upload,.pdfconv-upbtn").click(function () {
    $("#input-files").trigger("click");
  });
});

}

/*
     FILE ARCHIVED ON 19:30:34 Jul 16, 2025 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 04:28:06 Feb 21, 2026.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.36
  exclusion.robots: 0.011
  exclusion.robots.policy: 0.005
  esindex: 0.006
  cdx.remote: 15.776
  LoadShardBlock: 100.027 (3)
  PetaboxLoader3.datanode: 91.59 (5)
  PetaboxLoader3.resolve: 112.808 (2)
  load_resource: 118.11
  loaddict: 25.64
*/

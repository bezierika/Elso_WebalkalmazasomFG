let imageData = [{
    photo: "image/picture1.jpg",
    title: "Fa",
    description: "What happened here, why is this a very nice image"
  }, {
    photo: "image/picture2.jpg",
    title: "Vénusz légycsapója",
    description: "What happened here, why is this a very nice image"
  }, {
    photo: "image/picture3.jpg",
    title: "Levendula mező",
    description: "What happened here, why is this a very nice image"
  }, {
    photo: "image/picture4.jpg",
    title: "Tulipán mező",
    description: "What happened here, why is this a very nice image"
  }, {
    photo: "image/picture5.jpg",
    title: "Borostyán",
    description: "What happened here, why is this a very nice image"
  }, {
    photo: "image/picture6.jpg",
    title: "Aranylótusz banán",
    description: "What happened here, why is this a very nice image."
  }, {
    photo: "image/picture7.jpg",
    title: "Rózsa",
    description: "What happened here, why is this a very nice image"
  }, {
    photo: "image/picture8.jpg",
    title: "Csipkebogyó",
    description: "What happened here, why is this a very nice image"
  }];
  
  let currentPhoto = 0;
  
  $(document).ready(function () {
    imageData.forEach(function (image, index) {
      $(".thumbnails").append(`<div class="thumbnail" data-number="${index}"><div class="content">
      <div class="tooltip"><span class="tooltip-text">${image.title}</span></div></div></div>`);
      $(`.thumbnails>.thumbnail[data-number="${index}"]>.content`).css("background-image", 
      'url("' + image.photo + '"), linear-gradient(white, lightgray)');
    });
    $(".image-gallery>.thumbnails>.thumbnail").click((event) => {
      currentPhoto = parseInt($(event.target).parent().attr("data-number"));
      loadPhoto(currentPhoto);
    });
    loadPhoto(currentPhoto);
  });
  
  let loadPhoto = (photoNumber) => {
    $(".photo").css("background-image", `url("${imageData[photoNumber].photo}")`);
    $(".photo-title").text(imageData[photoNumber].title);
    $(".photo-description").text(imageData[photoNumber].description);
    $(".thumbnails>.thumbnail[data-number]").removeClass("active");
    $(`.thumbnails>.thumbnail[data-number="${photoNumber}"]`).addClass("active");
  }
  
  $(".next").click(() => {
    currentPhoto++;
    currentPhoto %= imageData.length;
    loadPhoto(currentPhoto);
  });
  
  $(".prev").click(() => {
    if (currentPhoto > 0) {
      currentPhoto--;
    } else {
      currentPhoto = imageData.length - 1;
    }
    loadPhoto(currentPhoto);
  })
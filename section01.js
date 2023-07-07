// 타이틀 이미지 움직임
const movingImg = (evt) => {
  let x = evt.clientX;
  let y = evt.clientY;

  $('#banner-title').css({ left: 20 - x / 60, bottom: 20 - y / 30 });

  requestAnimationFrame(movingImg);
};

$('.banner-wrapper').on('mousemove', movingImg);

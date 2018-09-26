window.addEventListener('load',function(){
// 滚动条内容滚动的js
var jdCategory=new JdCategory();
jdCategory.initLeftSlide();
jdCategory.initRightSlide();
jdCategory.leftCeiling();
});



var JdCategory=function(){

}

// 左边的滚动条
JdCategory.prototype={
  initLeftSlide:function(){
    var swiper = new Swiper('.category-left .swiper-container', {
      direction: 'vertical',
      slidesPerView: 'auto',
      freeMode: true,
      scrollbar: {
        el: '.swiper-scrollbar',
      },
      mousewheel: true,
    });
  },

// 左侧点击吸顶效果
leftCeiling:function(){
  // 因为有很多个li,用事件捕获比较好
 var ul=document.querySelector('.category-left  ul');
  //  console.log(ul);
  var lis=ul.children; //点语法点出没个li
  //  console.log(lis);
  // 遍利每一个li并添加index相对应属性
  for(var i=0;i<lis.length;i++){
     lis[i].index=i;  //给li的dom对象添加一个属性,值是i;
   // lis[i].setAttribute('index', i);//添加到标签上的(相对来说没有用添加到对象里好,容易被改)
  }
 

  // 给ul添加点击事件
  ul.addEventListener('click',function(e){
    // console.log(e);
    // 真正触发的其实是子元素,不过a在最里面,所以是a的父元素
     var li=e.target.parentNode;
    //  console.log(li);
    //  console.log(li.getAttribute('index')); 
      var indexs=li.index;
      // console.log(indexs);
      var liHeight=li.offsetHeight;
      // console.log(liHeight);  每个li真实高度是46
      // 点击要吸顶的高度
      var ceilingHight=-indexs*liHeight;
      // console.log(ceilingHight);
      //  判断当前的移动的距离是否大于最大移动的距离
      var maxDistanceY=document.querySelector('.category-left').offsetHeight-ul.offsetHeight;
      //  console.log(maxDistanceY); -1171
      if(ceilingHight>maxDistanceY){
        // 给当前swiper的ul的父元素父元素设置图片位移
        ul.parentNode.parentNode.style.transform = 'translate3d(0px, ' + ceilingHight + 'px, 0px)';   
      }else{
        ul.parentNode.parentNode.style.transform = 'translate3d(0px, ' + maxDistanceY + 'px, 0px)';
      }

       // 10. 给当前的位移的元素添加一个过渡效果让他慢慢位移
       ul.parentNode.parentNode.style.transitionDuration = '300ms';
      //  遍历每个li 如果有active就删除该属性
       for(var i=0;i<lis.length;i++){
         lis[i].classList.remove('active');
       }
      //  点击的那个li就添加active
       li.classList.add('active');
  })
},

// 右边的滚动条
  initRightSlide:function(){
    var swiper = new Swiper('.category-right .swiper-container', {
      direction: 'vertical',
      slidesPerView: 'auto',
      freeMode: true,
      scrollbar: {
        el: '.swiper-scrollbar',
      },
      mousewheel: true,
    });
    
    
  },

}
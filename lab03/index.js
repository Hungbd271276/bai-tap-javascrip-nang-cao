 var product = [
   {id: 1,
    title:  "LMHT: Leo rank thần tốc với những mẹo vô cùng độc đáo của lối chơi Gragas Đường trên",
    image: "https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/1/15/q-16106939270271126185591.png",
    content: "Ở mùa 11 của LMHT, Gragas đang nổi lên như một thế lực đáng gờm tại vị trí Đường trên. Với lối lên đồ đa dạng và bộ kỹ năng giàu tính đột biến, Gragas là lựa chọn phù hợp với hầu hết trận đấu. Hãy cùng tìm hiểu những mẹo cực kỳ độc đáo để có thể làm tỏa sáng ở vị trí Đường trên với Gã Bợm Rượu này nhé."
   },

   {id: 2,
    title: "Đấu Trường Chân Lý: Riot hé lộ về update lớn của hệ thống Tinh Anh tại mùa 4.5",
    image: "https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/1/15/photo-1-16106838847091695342249.jpg",
    content: "Về cơ bản thì chỉ còn khoảng 1 tuần nữa là Đấu Trường Chân Lý mùa 4.5 sẽ ra mắt chính thức. Đợt cập nhật này hứa hẹn sẽ thay đổi hoàn toàn meta của Đấu Trường Chân Lý khi nhiều nội dung mới được thêm vào game. Không chỉ dừng lại ở những tộc - hệ hay tướng mới, các update về hệ thống của Đấu Trường Chân Lý cũng rất đáng chú ý."
   },

   {id: 3,
    title: "Những cái tên chuẩn bị lên thớt trong bản cập nhật sắp tới của Liên Minh: Tốc Chiến",
    image: "https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/1/14/-1610601672147513602494.jpg",
    content: "Liên Minh: Tốc Chiến đã đến tay người chơi được một thời gian và đến khi tựa game này được hoàn thiện 100% còn cần trải qua rất nhiều đợt chỉnh sửa. Những vị tướng mới cũng sẽ được cập nhật đầy đủ và thậm chí, theo chính Riot tiết lộ trước đây, Liên Minh: Tốc Chiến sẽ có những vị tướng và trang phục độc quyền, chưa từng 	xuất hiện kể cả trong LMHT bản PC."
   }
 ];

  var ggmap = product.map(function(e){
       return `<div class = "ahihi"><h2>${e.title}</h2>
              <img style = "width:40px , height: 80px" src = "${e.image}"/>
              <p>${e.content}</p>
       </div>`;
  }).join("");

   document.querySelector("#product").innerHTML = ggmap;

   // đệ quy
   // 3 * 2 * 1
   //4  * 3 * 2 * 1
   // 5 * 4 * 3 *2 * 1
  //  function number(num){
  //   var ouput = 1;
  //   for(var i = num ; i > 0 ; i--){
  //           ouput = ouput * i;   
  //    }
  //     return ouput;
  //  }
  //  console.log(number(6));

  //  function number(num){
  //      if(num > 0){
  //        return num * number(num - 1);
  //      }
  //      return 1;
  //  }
  //  console.log(number(5));   
  var mang = [1 , 2 ,3 ,1 ,2 ,3];
  console.log([...(new Set(mang))]);
  
  // function cowdow(num){
  //     if(num > 0){
  //       console.log(num);
  //          return cowdow(num -1);
  //     }
  //     return num;
  // }

  // console.log(cowdow(10));

  // Tư duy đề quỵ

   function pow(x , n){
   var regul = 1;
   for(let i = 0; i < n ; i++){
     regul *= x;
   }
   return regul;
  }
alert(pow(2 , 3)); // 8
  // function pow(x , n){
  //     if(x == 1){
  //       return x;
  //     }else{
  //         return x * pow(x , n -1);  
  //     }

  // }
  // alert(pow(2 , 3)); // 8
  


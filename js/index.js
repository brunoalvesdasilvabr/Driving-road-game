
//Function que fazem o jogo rodar//

var FunctionController = (function(){
    return{
      run:function(){
        document.querySelector('.turbo').addEventListener('click', function(){
         document.querySelector('.background').style.animation = "driving 3s linear infinite";});
        document.querySelector('.turbo').addEventListener('dblclick', function(){
        document.querySelector('.background').style.animation = "driving 15s linear infinite";
      })
    
  },
   // stopRain: function(){
   //    document.querySelector('.btn').addEventListener('click', function(){
   //    document.querySelector('.rain').style.display = "none";
   //    document.querySelector('.btn').style.opacity ="0";
   //    });
   //  },
      controles:function(){
            document.querySelector('.c-a').addEventListener('click',function(){
            document.querySelector('.car').style.bottom ="52%";
            document.querySelector('.controle').style.animation ="mecheleft 2s 1"
  })
  
              document.querySelector('.c-b').addEventListener('click',function(){
                document.querySelector('.car').style.bottom ="40%";
                  document.querySelector('.controle').style.animation ="mecheright 2s 1"
  
            })
          },
      setas: function(){
        document.addEventListener('keydown',function(event){
  
                  if(event.keyCode === 37 || event.which === 37){
                     //code
  
                          document.querySelector('.car').style.bottom ="52%";
                }
   else if(event.keyCode === 39 || event.which === 39){
      //code
      
           
                document.querySelector('.car').style.bottom ="40%";
  
            }
           else if(event.keyCode === 38 || event.which === 38){
      //code
      
           
                document.querySelector('.background').style.animation ="driving 3s linear infinite";
  
            }
             else if(event.keyCode === 40 || event.which === 40){
      //code
      
           
                document.querySelector('.background').style.animation ="driving 15s linear infinite";
  
            }
      })
      }
        }
       })()
  
  
  //Controller que chama todas as funcções
            var Controller = (function(funCtrl){
              funCtrl.run();
              funCtrl.setas();
              // funCtrl.stopRain();
              funCtrl.controles();
  })(FunctionController)
  
  
let data =[
           {
			   id:1,
			   name:"Brunch Bowl 24/7",
			   cuisines:"Fast Food,Sandwhich",
			   imgurl:"https://b.zmtcdn.com/data/dish_photos/224/d7ce63c876594a9d22bf14c75515d224.png",
			   rating:4.1,
			   rate:"100 for one",
			   time:"25 min",
			   promotion:"Promoted",
			   offer:"50% OFF up to 100"
		   },
		   {
			   id:2,
			   name:"Burger King",
			   cuisines:"Burger,Fast Food",
			   imgurl:"https://b.zmtcdn.com/data/pictures/chains/8/310078/749216f498eb2ed21ffd317f4bdc8a1d_o2_featured_v2.jpg?output-format=webp",
		       rating:4.2,
			   rate:"150 for one",
			   time:"30 min",
			   promotion:"Promoted",
			   offer:"50% OFF up to 100"
		   },
           {
			   id:3,
			   name:"Pizzasia",
			   cuisines:"Pizza,Pasta,Fast Food",
			   imgurl:"https://b.zmtcdn.com/data/dish_photos/224/d7ce63c876594a9d22bf14c75515d224.png",
			   rating:3.5,
			   rate:"200 for one",
			   time:"35 min",
			   promotion:"",
			   offer:"50% OFF up to 100"
		   },
		  
           {
			   id:4,
			   name:"Pizza Hut",
			   cuisines:"Pizza,Italian",
			   imgurl:"https://b.zmtcdn.com/data/pictures/chains/6/246/5ca8db5083b0882ad64edd049395af7c_o2_featured_v2.jpg?output-format=webp",
		   	   rating:2.1,
			   rate:"120 for one",
			   time:"15 min",
			   promotion:"",
			   offer:""
		   },
           {
			   id:5,
			   name:"What the Fork",
			   cuisines:"Chinese,Burger,Roll",
			   imgurl:"https://b.zmtcdn.com/data/pictures/9/20250609/bc34763a4bc3dbb3f19d91763c8dd1b0_o2_featured_v2.jpg?output-format=webp",
			   rating:3.5,
			   rate:"150 for one",
			   time:"25 min",
			   promotion:"",
			   offer:"50% OFF up to 100"
		   },
           {
			   id:6,
			   name:"Domino's Pizza",
			   cuisines:"Pizza,Fast food",
			   imgurl:"https://b.zmtcdn.com/data/pictures/chains/3/143/cb4822bd0ecf5e677eea7956c6ebe926_o2_featured_v2.jpg?output-format=webp",
			   rating:4.2,
			   rate:"100 for one",
			   time:"35 min",
			   promotion:"Promoted",
			   offer:""
		   },
           {
			   id:7,
			   name:"The Samosa Factory",
			   cuisines:"Rolls,Street Food",
			   imgurl:"https://b.zmtcdn.com/data/pictures/0/20406910/5a391dad34f6ab6fdd87444e4dbc8f56_o2_featured_v2.jpg",
			   rating:4.8,
			   rate:"50 for Two",
			   time:"25 min",
			   promotion:"Promoted",
			   offer:"Flat 150 Off"
		   },
           {
			   id:8,
			   name:"KFC",
			   cuisines:"Fried Chicken,Burger",
			   imgurl:"https://b.zmtcdn.com/data/pictures/chains/1/931/0b79e39ffc2e3770f3b66b26c0e6f4fd_o2_featured_v2.jpg?output-format=webp",
			   rating:4.9,
			   rate:"100 for one",
			   time:"20 min",
			   promotion:"Promoted",
			   offer:""			   
		   },
           {
			   id:9,
			   name:"Pizzasia",
			   cuisines:"Pizza,Pasta,Fast Food",
			   imgurl:"https://b.zmtcdn.com/data/pictures/chains/6/246/5ca8db5083b0882ad64edd049395af7c_o2_featured_v2.jpg?output-format=webp",
			   rating:3.9,
			   rate:"150 for Two",
   			   time:"20 min",
			   promotion:"",
			   offer:"",
		   },
           {
			   id:10,
			   name:"La Pino'z Pizza",
			   cuisines:"pizza,Pasta ,fast food",
			   imgurl:"https://b.zmtcdn.com/data/pictures/chains/7/18619067/54b6de34323395a3b10897e48bd2a6e5_o2_featured_v2.jpg",
			   rating:2.8,
			   rate:"100 for one",
			   time:"45 min",
			   promotion:"",
			   offer:"Flat 150 Off"
		   },

		  ];
		  
		  let cont=document.querySelector(".container");
		  let cards=document.createElement("div");
		  cards.classList.add("row");
		  cont.appendChild(cards);
		  data.forEach(function(values,index,array)
		  {
			  let div=document.createElement("div");
			  div.classList.add("col");
			  cards.appendChild(div);
			  
			  let div2=document.createElement("div");
			  div2.classList.add("col-card");
			  div.appendChild(div2);
			  
			  let img=document.createElement("img");
			  img.src=values.imgurl;
			  div2.appendChild(img);
			  
			  let head=document.createElement("h4");
			  head.innerText=values.name;
			  div2.appendChild(head);
			  			  		  
			  let span=document.createElement("span");
			  span.innerText=values.rating;
			  head.appendChild(span);
			  let i=document.createElement("i");
			  i.innerHTML='<i class="bi bi-star-fill"></i>';
			  span.appendChild(i);
			  
			  let para=document.createElement("p");
			  para.innerText=values.cuisines;
			  div2.appendChild(para);
			  
			  let para2=document.createElement("p");
			  para2.innerHTML=`&#8377; ${values.rate}`;
			  para.appendChild(para2);
		  
			  
			  let para3=document.createElement("p");
			  para3.classList.add("time1");
			  para3.innerText=values.time;			  
			  div2.appendChild(para3);

			  let div3=document.createElement("div");
              div3.classList.add("promote");
              div3.innerText=values.promotion;
              div2.appendChild(div3);	
              
              let div4=document.createElement("div");
              div4.classList.add("offer");
              div4.innerHTML=`&#8377; ${values.offer}`;
              div2.appendChild(div4);			  
			  
			   
		  if(values.rating >= 4.5)
		   {
			   span.style.backgroundColor = "blue";
               span.style.color = "white";
		   }
		   else if(values.rating <4.5 && values.rating >=4)
		   {
			   span.style.backgroundColor = "green";
               span.style.color = "white";

		   }
		   else if(values.rating <4 && values.rating >=3)
		   {
			   span.style.backgroundColor = "orange";
               span.style.color = "white";

		   }

		   else
		   {
			   span.style.backgroundColor = "red";
               span.style.color = "white";
			}
		   
		   if(values.promotion !== "")
		   {
			   div3.style.display="block";
		   }
		   else
		   {
			   div3.style.display="none";	   
		   }
		   if(values.offer !== "")
		   {
			   div4.style.display="block";
		   }
		   else
		   {
			   div4.style.display="none";	   
		   }
		   
		     
		  });
          
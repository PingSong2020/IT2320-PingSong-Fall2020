/********************************************/

/********************************************/
function calc(price, discount){
  return (price - (price*discount));
}

function getDiscountedPrices()
{
   var books = [
       {name:"SQL Server 2019 for developers ", author: "Joel Murach; Bryan Syverson ", price:55.22, origin: "US"},//js object
       {name:"HTML5 and CSS4, 4th Edition", author: "Anne Boehm", price:29.99, origin: "Germany"},
       {name:" c++ programming ", author: " Joel Murach ", price: 29.99 , origin: "US"},
       {name:" PHP and MySQL, 3rd Edition ", author: "Joel Murach  ", price: 29.99 , origin: "US"},
       {name:" Programming Logic & Design, Conprehensive 9th Editin ", author: " Joyce Fam ", price:29.99, origin: "Canada"},
       {name:"Fundamentals of C# Programming for Information Systems 2nd Edition  ", author: "George C. Phillp  ", price: 29.99 ,origin: "UK"},
       {name:"Machine Learning Pocket Reference, 1st edition  ", author: "Matt Harrison  ", price:21.99 , origin: "UK"},
       {name:" Simulation and Modeling ", author: "Asim El Sheikh  ", price: 99.95 , origin: "UK"},
       {name:"Innovative Approaches of Data Visualization and Visual Analytics  ", author: "Mao Lin Huang ", price:200.00 , origin:"France"},
       {name:"Data Science for Business  ", author: "Foster Porvost, Tom Fawcett  ", price: 42.99 , origin: "US"},
       {name:"Invative Techniques and Applications of Entity Resolution  ", author: " Hongzhi Wang ", price:205  , origin: "Italy"},
       {name:"Deep Learning Cookbook  ", author: "Douwe Osinga  ", price: 50.99 , origin: "US"},
       {name:" Maching Learning with R Cookbok ", author: "David Chiu ", price:47.99  , origin: "US"},
       {name:"Handbok of Research on Pattern Engineering System Development for Big Data Analytics", author: "Vivek Tiwari ", price:320,
       origin: "US"},
       {name:" Chaos And Information Processing ", author: "Nicolis John S ", price: 150 , origin: "US"},
       {name:" Lifelong Machng Learning ", author: " Zhiyuan Chen; Bing Liu ", price: 63.96 , origin: "Germany"},
       {name:" Information System Research ", author: "Matthew A. Taylor  ", price:29.95 , origin: "Canada"},
       {name:" Advances On Computer Mathematics And Its Applications ", author: "Lipitakis Elias A  ", price:210  , origin: "US"},
       {name:" Image-Based Modeling of Plants and Trees ", author: " Sing Bang Kang; Long Quan ", price:30.00  , origin: "US"},
       {name:"Unity 2017 Game AI Programming, 3rd edition  ", author: "Aung Sithu Kyaw  ", price: 14.51 , origin: "US"},
   ]// JS object array

   books.forEach( function(boo){
      if(origin=="US")
        var discount = 0.1;
  
      else if(origin=="UK")
        var discount = 0.05; 

      else if(origin=="Canada")
        var discount = 0.12;
  
      else
        var discount = 0.15;

        boo.saleprice = calc (boo.price, discount);

        console.log("Name:"+boo.name +","+"Author:"+ boo.author +","+ "Price:"+ boo.price+","+"Sale Price:"
        + boo.saleprice +","+ "Origin:"+ boo.origin);
     }    
   )
}
    
    

import React from 'react'


const menucard = ({menuData}) => {
  return (
    <>
     <section className='main-card--cointainer'>
      {
        menuData.map((curEle) =>{
            //destructure object
            //const{id, name, category, image, description}=curElem;
            return(
            <>
      
      <div className="card-container" key={curEle.id}>
                <div className='card'>
                  <div className='card-body'>
                    <span className='card-number card-circle subtle'>{curEle.id}</span><br />
                    <span className='card-author subtle'>{curEle.category}</span>
                    <h2 className='card-title'>{curEle.name}</h2>
                    <span className='card-description subtle'>
                    {curEle.description}
                    </span>
                  <div className='card-read'>Read</div>
                 </div>
                  <img src={curEle.image} alt='images' className='card-media' /> 
                 <span className="card-tag subtle">Order Now</span>
                </div>
             </div>
            </>    
            )
        })
      }
      </section>
    </>
  );
};

export default menucard;
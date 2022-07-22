import React, { useState } from 'react'
import { FilterItem } from '../asset/dummy'
import { Product_Card_Content } from '../asset/dummy'

const Gallery = () => {
    const [productData, setProductData] = useState(Product_Card_Content)
    const filterResult = (_category) => {
        const result = Product_Card_Content.filter((currData) => {
            return currData.category === _category
        })
        setProductData(result)
    }

    return (
      <div className='container-fluid mx-2'>
          <div className='row mt-5 mx-2'>
              {/************************  Product Filter Part ************************/}
              <div className='col-md-3'>
                  {FilterItem.map((item,index) => (
                      <button 
                          className='btn btn-outline-primary w-100 mb-4' 
                          key={index}
                          onClick={() => {filterResult(item)}}
                      >
                          {item}
                      </button>
                  ))}
                    <button 
                        className='btn btn-outline-primary w-100 mb-4' 
                        onClick={() => setProductData(Product_Card_Content)}
                    >
                        Clear Filter
                    </button>
              </div>
              {/************************  Product Display Part ************************/}
              <div className='col-md-9'>
                  <div className='row'>

                      {productData.map((item,index) => (
                          <div className='col-md-3 mb-4'>
                              <div className="card"  key={index}>
                                 <img src={item.image} className="card-img-top w-80 h-80" alt="" />
                                 <div className="card-body">
                                    <h5 className="card-title fw-bold">{item.title}</h5>
                                    <p className="card-text mb-3">{item.description}</p>
                                    <a href="#" className="btn btn-primary">More Info</a>
                                </div>
                              </div>
                          </div>
                      ))}

                  </div>
              </div>
          </div>
      </div>
    )
}

export default Gallery
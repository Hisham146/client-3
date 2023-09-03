import React from 'react'
import { Link } from 'react-router-dom';
const AdCard = ({ item }) => {

  return (
    <div>
    <div className="container mt-4 mb-4">
      <div className="d-flex justify-content-center row">
        <div className="col-md-10">
        <div className="row p-2 bg-white border rounded">
                <div
                  className="col-lg-4 col-md-5 col-12 mt-1 d-flex justify-content-center align-items-center"
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <div
                    className="cover"
                    style={{
                      width: '100%',
                      height: '100%',
                      maxWidth: '100%',
                      minHeight: '200px',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center center',
                      backgroundRepeat: 'no-repeat',
                      backgroundImage: `url(${item.cover})`,
                    }}
                  ></div>
                </div>

                <div className="col-md-4 col-lg-5 mt-1 pt-1">
                  <h5>{item.title}</h5>
                  <div className="d-flex flex-row">
                    <span>{item.location}</span>
                  </div>
                  <p className="text-justify text-truncate para mb-0 ">{item.shortDesc} <br/><br/></p>
                </div>
                
                <div className="align-items-center align-content-center col-md-3 border-left mt-1">
                  <div className="d-flex flex-row align-items-center pt-0 pt-md-5 pt-lg-5">
                    <p className="mr-1 text-uppercase fw-bold fs-3">PKR {item.price.toLocaleString()} </p>
                  </div>
                    
                    <div className="d-flex flex-column mt-1 pb-3">
               <Link to={`/ad/${item._id}`}> <button 
                     style={{
                        backgroundColor: '#a891b7',
                        color: 'white',
                        border: 'none',
                        padding: '0.3rem 0.7rem',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        transition: 'all 0.3s',
                      }}
                     
                 className="btn btn-primary btn-md " type="button">Show Full Ad</button></Link> 
                  </div>
                </div>
            </div> 
            </div> 
            </div>
    </div>
    </div>
  )
};

export default AdCard


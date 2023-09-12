import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery} from 'react-query';
import newRequest from '../../utils/newRequest';
import getCurrentUser from '../../utils/getCurrentUser';
import { FaEdit, FaTrash } from 'react-icons/fa';

const MyAds = () => {
  const currentUser =  getCurrentUser();
  const userId = currentUser._id;
  const navigate = useNavigate();

  const { isLoading, data, refetch } = useQuery({
    queryKey: ["myads"],
    queryFn: () =>
      newRequest.get(`/posts/myposts/${userId}`).then((res) => {
      return res.data;
    }),    
  });

  
  const handleDelete = async (id) => {
        try{
          const shouldEdit = window.confirm('Are you sure you want to Edit this Ad?');
    if (shouldEdit) {
           const res = await newRequest.delete(`/posts/delete/${id}?userId=${userId}`)
           return res.data
    }
    refetch();
        }
        catch(error){
          console.log("error", error)
        }
  }

  const handleEdit = (id) => {
    const shouldEdit = window.confirm('Are you sure you want to Edit this Ad?');
    if (shouldEdit) {
      navigate(`/edit-ad/${id}`);
    }
  };
  

  return (
    <div>
    <div className="container mt-4 mb-4">
      <div className="d-flex justify-content-center row">
        <div className="col-md-10">
          <h3 className="text-center" style={{color:'grey'}}>My POSTS</h3>
          {isLoading ? (
            <p className="text-center">Loading...</p>
          ) : data.length === 0 ? (
            <p className="text-center" style={{color:'red', marginTop:'20%', marginBottom:'20%', fontWeight:'500'}} >No Ads posted.</p>
          ) : (
            data.map((item) => (
              <div key={item._id} className=" row p-2 bg-white border rounded mt-4 mb-4">
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
                  <div className="d-flex flex-row align-items-center pt-5">
                    <p className="mr-1 text-uppercase fw-bold fs-3">PKR {item.price.toLocaleString()} </p>
                  </div>
                  
                  <div className="d-flex flex-column mt-1 pb-3">
                    <button 
                      style={{
                        backgroundColor: '#a891b7',
                        color: 'white',
                        border: 'none',
                        padding: '0.3rem 0.7rem',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        transition: 'all 0.3s',
                      }}
                      className="btn btn-primary btn-md " type="button"
                      onClick={()=> handleEdit(item._id)}
                    >
                      Edit <FaEdit/>
                    </button>

                    <button 
                      style={{
                        backgroundColor: 'red',
                        color: 'white',
                        border: 'none',
                        padding: '0.3rem 0.7rem',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        transition: 'all 0.3s',
                        marginTop:"10px"
                      }}
                      className="btn btn-primary btn-md " type="button"
                      onClick={()=> handleDelete(item._id)}
                    >
                      Delete <FaTrash/> 
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  </div>
);
    };
export default MyAds;
 

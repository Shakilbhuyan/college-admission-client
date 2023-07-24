import React from 'react';
import { useData } from '../../hooks/useData';

const Allcollege = () => {
    const  [colleges] = useData();
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 my-5'>
           {
            colleges.map(college => <div className="card w-96 glass" key={college._id}>
            <figure><img src={college.college_image} alt="car!"/></figure>
            <div className="card-body">
              <h2 className="card-title">{college.name}</h2>
              <p>Sports: {college.sports}</p>
              <p>Admission: {college.admission_date}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">View Detail</button>
              </div>
            </div>
          </div>)
           }
        </div>
   
    );
};

export default Allcollege;
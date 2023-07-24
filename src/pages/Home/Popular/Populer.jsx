import React from 'react';
import { useData } from '../../../hooks/useData';

const Populer = () => {
    const [colleges] = useData();
    const populerCollege = colleges.slice(0,3)
    return (
        <div>
            <h1 className='font-semibold text-4xl text-black text-center'>Populer College</h1>
            <p className='text-center text-red-500'>~~~~~~~</p>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 my-5'>
               {
                populerCollege.map(college => <div className="card w-96 glass" key={college._id}>
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
        </div>
    );
};

export default Populer;
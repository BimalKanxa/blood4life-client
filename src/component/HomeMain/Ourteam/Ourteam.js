import React from 'react';
import { Card } from 'react-bootstrap';
import './Ourteam.css'

const Ourteam = () => {
    return (
        <div className='row mt-5 mx-3 team-fild'>
            <h1 className='team-leader text-white'>The leader of our team</h1>
            <div className='col-lg-4 col-sm-12 mb-5'>
            <div>     
            <Card  className='team'> 
            <div>
             <img src="https://image.shutterstock.com/image-photo/portrait-charming-mature-man-true-260nw-1571432695.jpg" className="image-tem" alt="..." />
         </div>       
           <Card.Body>
            <Card.Subtitle className=" mt-5 text-white">Bimal Sharma</Card.Subtitle>
            <Card.Text className='card-text'>
            "Hi there! I'm Bimal Sharma, a passionate full stack developer. With a robust skill set encompassing front-end technologies like HTML, CSS, and JavaScript, coupled with expertise in back-end frameworks such as Node.js and ExpressJs, I thrive on bringing creative ideas to life in the digital realm".
            </Card.Text>
              </Card.Body>
             </Card> 
            </div>
    
        </div>
            <div className='col-lg-4 col-sm-12 mb-5'>
            <div>     
            <Card  className='team'> 
            <div>
             <img src="https://media.istockphoto.com/photos/smiling-indian-man-looking-at-camera-picture-id1270067126?k=20&m=1270067126&s=612x612&w=0&h=ZMo10u07vCX6EWJbVp27c7jnnXM2z-VXLd-4maGePqc=" className="image-tem" alt="..." />
         </div>       
           <Card.Body>
            <Card.Subtitle className="mt-5 text-white">Rahul Ray</Card.Subtitle>
            <Card.Text className='card-text'>
            "Hi there! I'm Bimal Sharma, a passionate full stack developer. My journey in software development is fueled by a relentless curiosity and a commitment to excellence, as I continuously seek out new challenges and opportunities to innovate".
            </Card.Text>
              </Card.Body>
             </Card> 
            </div>
    
        </div>
            <div className='col-lg-4 col-sm-12 mb-5'>
            <div>     
            <Card  className='team'> 
            <div>
             <img src="https://images.pexels.com/photos/1181487/pexels-photo-1181487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="image-tem" alt="..." />
         </div>       
           <Card.Body>
            <Card.Subtitle className="mt-5 text-white">Dr. Kangkana Bora</Card.Subtitle>
            <Card.Text className='card-text'>
            "Hi there! I'm Dr. Kangkana Bora, Assistant Professor, Department of Computer Science and IT. I am specialize in Machine Learning and Artificial Intelligence. I have more than 15 years of experience in teaching. I'm dedicated to fostering a collaborative learning environment, practical and hands-on experience in building real-world software solutions.".
            </Card.Text>
              </Card.Body>
             </Card> 
            </div>
    
        </div>
        </div>
    );
};

export default Ourteam;
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
            <Card.Subtitle className=" mt-5 text-white">Bimal</Card.Subtitle>
            <Card.Text className='card-text'>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
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
            <Card.Subtitle className="mt-5 text-white">Mr. Rahul </Card.Subtitle>
            <Card.Text className='card-text'>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
            </Card.Text>
              </Card.Body>
             </Card> 
            </div>
    
        </div>
            <div className='col-lg-4 col-sm-12 mb-5'>
            <div>     
            <Card  className='team'> 
            <div>
             <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="image-tem" alt="..." />
         </div>       
           <Card.Body>
            <Card.Subtitle className="mt-5 text-white">Baroon</Card.Subtitle>
            <Card.Text className='card-text'>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
            </Card.Text>
              </Card.Body>
             </Card> 
            </div>
    
        </div>
        </div>
    );
};

export default Ourteam;